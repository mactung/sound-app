import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import services from 'models/services';
import useMixLibrary from 'hooks/useMixLibrary';
import { soundIcon } from 'utils/soundIcon';
import { Colors, Radius, Spacing } from 'styles/global.style';

const ART = ['#5B3F9E', '#7C3AED', '#4C3A8A', '#8B5CF6', '#6D28D9', '#B15CD1', '#3F3A8A', '#9D4EDD', '#7E4FD8'];

type Filter = 'all' | 'sound' | 'music';
const FILTERS: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'sound', label: 'Soundscapes' },
    { key: 'music', label: 'Music' },
];

const SoundscapeGrid = () => {
    const { loadMix } = useMixLibrary();
    const [filter, setFilter] = useState<Filter>('all');

    const items = useMemo(() => {
        const sounds = services.soundService.getAllSounds().map((s: any) => ({ ...s, kind: 'sound' }));
        const musics = services.soundService
            .getAllMusics()
            .flatMap((c: any) => c.sounds.map((s: any) => ({ ...s, kind: 'music' })));
        const all = [...sounds, ...musics];
        if (filter === 'sound') {
            return sounds;
        }
        if (filter === 'music') {
            return musics;
        }
        return all;
    }, [filter]);

    const play = (item: any) => {
        const entry = { _id: item._id, name: item.name, file_name: item.file_name, type: item.kind, volume: 1 };
        loadMix({
            _id: 0,
            name: item.name,
            created_at: 0 as any,
            sounds: item.kind === 'music' ? [] : [entry],
            music: item.kind === 'music' ? entry : null,
        });
    };

    return (
        <View>
            <View style={styles.pills}>
                {FILTERS.map(f => {
                    const active = filter === f.key;
                    return (
                        <Pressable
                            key={f.key}
                            style={[styles.pill, active && styles.pillActive]}
                            onPress={() => setFilter(f.key)}>
                            <Text style={[styles.pillText, active && styles.pillTextActive]}>{f.label}</Text>
                        </Pressable>
                    );
                })}
            </View>

            <View style={styles.grid}>
                {items.map((item: any, i: number) => (
                    <Pressable key={String(item._id) + i} style={styles.card} onPress={() => play(item)}>
                        <View style={[styles.art, { backgroundColor: ART[i % ART.length] }]}>
                            <Icon name={soundIcon(item.name)} type="ionicon" size={40} color="rgba(255,255,255,0.9)" />
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>free</Text>
                            </View>
                            <View style={styles.playChip}>
                                <Icon name="play" type="ionicon" size={14} color={Colors.onAccent} />
                            </View>
                        </View>
                        <Text style={styles.name} numberOfLines={1}>
                            {item.name}
                        </Text>
                        <Text style={styles.sub} numberOfLines={1}>
                            {item.kind === 'music' ? 'Music' : 'Soundscape'}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pills: {
        flexDirection: 'row',
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.md,
    },
    pill: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: Radius.pill,
        backgroundColor: 'rgba(255,255,255,0.06)',
        marginRight: 10,
    },
    pillActive: {
        backgroundColor: Colors.accent,
    },
    pillText: {
        color: Colors.textMuted,
        fontWeight: '600',
        fontSize: 13,
    },
    pillTextActive: {
        color: Colors.onAccent,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: Spacing.md - 4,
    },
    card: {
        width: '50%',
        paddingHorizontal: 4,
        marginBottom: Spacing.md,
    },
    art: {
        height: 130,
        borderRadius: Radius.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.35)',
        borderRadius: Radius.pill,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    badgeText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: '700',
    },
    playChip: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '700',
        marginTop: 8,
        marginLeft: 2,
    },
    sub: {
        color: Colors.textMuted,
        fontSize: 12,
        marginLeft: 2,
    },
});

export default SoundscapeGrid;
