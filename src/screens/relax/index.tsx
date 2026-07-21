import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import usePlayer from 'hooks/usePlayer';
import { Colors, Radius, Spacing } from 'styles/global.style';
import VinylDisc from './components/VinylDisc';
import FloatingNotes from './components/FloatingNotes';

type Mode = 'relax' | 'pomodoro';
type Phase = 'focus' | 'rest';

const PRESETS = [
    { label: '25 / 5', focus: 25 * 60, rest: 5 * 60 },
    { label: '50 / 10', focus: 50 * 60, rest: 10 * 60 },
];

const pad = (n: number) => (n < 10 ? '0' + n : '' + n);
const fmtClock = (d: Date) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const fmtTimer = (s: number) => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;

const RelaxMode = () => {
    const { isPlaying } = useSelector((state: any) => state.player);
    const { playPlayer, pausePlayer } = usePlayer();

    const [mode, setMode] = useState<Mode>('relax');

    // --- Relax (live clock) ---
    const [now, setNow] = useState<Date>(new Date());
    useEffect(() => {
        if (mode !== 'relax') {
            return;
        }
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, [mode]);

    // --- Pomodoro ---
    const [presetIndex, setPresetIndex] = useState<number>(0);
    const preset = PRESETS[presetIndex];
    const [phase, setPhase] = useState<Phase>('focus');
    const [secondsLeft, setSecondsLeft] = useState<number>(preset.focus);
    const [running, setRunning] = useState<boolean>(false);
    const [rounds, setRounds] = useState<number>(0);

    const resetPomodoro = useCallback(
        (p = presetIndex) => {
            setRunning(false);
            setPhase('focus');
            setSecondsLeft(PRESETS[p].focus);
            setRounds(0);
        },
        [presetIndex],
    );

    // Keep the latest music controls without retriggering effects.
    const playRef = useRef(playPlayer);
    const pauseRef = useRef(pausePlayer);
    playRef.current = playPlayer;
    pauseRef.current = pausePlayer;

    // Tick: decrement once per second while running.
    useEffect(() => {
        if (mode !== 'pomodoro' || !running) {
            return;
        }
        const id = setInterval(() => {
            setSecondsLeft(prev => Math.max(prev - 1, 0));
        }, 1000);
        return () => clearInterval(id);
    }, [mode, running]);

    // Transition: when a phase hits 0, flip focus <-> rest and sync music.
    useEffect(() => {
        if (mode !== 'pomodoro' || !running || secondsLeft !== 0) {
            return;
        }
        if (phase === 'focus') {
            setRounds(r => r + 1);
            setPhase('rest');
            setSecondsLeft(preset.rest);
            pauseRef.current();
        } else {
            setPhase('focus');
            setSecondsLeft(preset.focus);
            playRef.current();
        }
    }, [mode, running, secondsLeft, phase, preset.focus, preset.rest]);

    const togglePomodoro = () => {
        const next = !running;
        setRunning(next);
        if (next && phase === 'focus') {
            playPlayer();
        } else {
            pausePlayer();
        }
    };

    const changePreset = (i: number) => {
        setPresetIndex(i);
        resetPomodoro(i);
    };

    // Disc + notes animate while music/focus is active.
    const spinning = mode === 'relax' ? isPlaying : running && phase === 'focus';

    const relaxToggle = () => (isPlaying ? pausePlayer() : playPlayer());

    return (
        <ImageBackground source={require('assets/images/background_sound.png')} style={styles.bg}>
            <View style={styles.dim} />
            <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
                <Text style={styles.screenTitle}>Relax Mode</Text>

                {/* Mode toggle */}
                <View style={styles.segment}>
                    <TouchableOpacity
                        style={[styles.segmentItem, mode === 'relax' && styles.segmentItemActive]}
                        onPress={() => setMode('relax')}>
                        <Text style={[styles.segmentText, mode === 'relax' && styles.segmentTextActive]}>Relax</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.segmentItem, mode === 'pomodoro' && styles.segmentItemActive]}
                        onPress={() => setMode('pomodoro')}>
                        <Text style={[styles.segmentText, mode === 'pomodoro' && styles.segmentTextActive]}>
                            Pomodoro
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Disc + floating notes */}
                <View style={styles.discArea}>
                    <FloatingNotes active={spinning} />
                    <VinylDisc spinning={spinning} />
                </View>

                {/* Time display */}
                {mode === 'relax' ? (
                    <View style={styles.timeBlock}>
                        <Text style={styles.bigTime}>{fmtClock(now)}</Text>
                        <Text style={styles.subTime}>{pad(now.getSeconds())} sec</Text>
                    </View>
                ) : (
                    <View style={styles.timeBlock}>
                        <Text style={[styles.phaseLabel, { color: phase === 'focus' ? Colors.accent : Colors.orange }]}>
                            {phase === 'focus' ? 'FOCUS' : 'BREAK'}
                        </Text>
                        <Text style={styles.bigTime}>{fmtTimer(secondsLeft)}</Text>
                        <Text style={styles.subTime}>Completed sessions: {rounds}</Text>
                    </View>
                )}

                {/* Controls */}
                {mode === 'relax' ? (
                    <TouchableOpacity style={styles.mainButton} onPress={relaxToggle} activeOpacity={0.85}>
                        <Icon
                            name={isPlaying ? 'pause' : 'play'}
                            type="ionicon"
                            size={30}
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
                ) : (
                    <View>
                        <View style={styles.presetRow}>
                            {PRESETS.map((p, i) => (
                                <TouchableOpacity
                                    key={p.label}
                                    style={[styles.presetChip, presetIndex === i && styles.presetChipActive]}
                                    onPress={() => changePreset(i)}>
                                    <Text
                                        style={[
                                            styles.presetText,
                                            presetIndex === i && styles.presetTextActive,
                                        ]}>
                                        {p.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.controlRow}>
                            <TouchableOpacity style={styles.ghostButton} onPress={() => resetPomodoro()}>
                                <Icon name="refresh" type="ionicon" size={24} color={Colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.mainButton} onPress={togglePomodoro} activeOpacity={0.85}>
                                <Icon
                                    name={running ? 'pause' : 'play'}
                                    type="ionicon"
                                    size={30}
                                    color={Colors.primary}
                                />
                            </TouchableOpacity>
                            <View style={styles.ghostButton} />
                        </View>
                    </View>
                )}
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bg: { flex: 1, backgroundColor: Colors.background },
    dim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(15, 18, 45, 0.55)' },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: Spacing.md,
        justifyContent: 'space-between',
        paddingVertical: Spacing.md,
    },
    screenTitle: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    segment: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: Radius.pill,
        padding: 4,
    },
    segmentItem: {
        paddingVertical: 8,
        paddingHorizontal: 26,
        borderRadius: Radius.pill,
    },
    segmentItemActive: {
        backgroundColor: Colors.accent,
    },
    segmentText: {
        color: Colors.textMuted,
        fontWeight: '600',
    },
    segmentTextActive: {
        color: Colors.primary,
    },
    discArea: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeBlock: {
        alignItems: 'center',
    },
    bigTime: {
        color: Colors.white,
        fontSize: 64,
        fontWeight: '200',
        letterSpacing: 2,
    },
    subTime: {
        color: Colors.textMuted,
        fontSize: 14,
        marginTop: 2,
    },
    phaseLabel: {
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 3,
        marginBottom: 4,
    },
    mainButton: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 16,
        elevation: 8,
    },
    controlRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ghostButton: {
        width: 52,
        height: 52,
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24,
    },
    presetRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: Spacing.md,
    },
    presetChip: {
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: Radius.pill,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        marginHorizontal: 6,
    },
    presetChipActive: {
        backgroundColor: 'rgba(137, 194, 217, 0.2)',
        borderColor: Colors.accent,
    },
    presetText: {
        color: Colors.textMuted,
        fontWeight: '600',
    },
    presetTextActive: {
        color: Colors.white,
    },
});

export default RelaxMode;
