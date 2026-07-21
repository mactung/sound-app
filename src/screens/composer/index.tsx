import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import AppBackground from 'components/AppBackground';
import CurrentMixFloat from 'components/CurrenMixFloat';
import { Colors } from 'styles/global.style';
import { useDispatch, useSelector } from 'react-redux';
import { addMusic, addSound, play, removeMusic, removeSound } from 'store/player';
import usePlayer from 'hooks/usePlayer';
import ListSounds from './components/ListSounds';
import ListMusics from './components/ListMusics';
Sound.setCategory('Playback');

const ComposerScreen = ({ route }: any) => {
    const dispatch = useDispatch();
    const { playPlayer } = usePlayer();
    const { index } = route.params;
    const { sounds, music, isPlaying } = useSelector((state: any) => state.player);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const addSoundToMixer = (itemSound: any) => {
        if (itemSound.is_selected) {
            if (itemSound.type === 'music') {
                dispatch(removeMusic());
            } else {
                dispatch(removeSound(itemSound.file_name));
            }
        } else {
            const sound = new Sound(itemSound.file_name, Sound.MAIN_BUNDLE, (error: any) => {
                if (error) {
                    console.log('error', error);
                    return;
                }
                sound.play((success: any) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
                sound.setCurrentTime(0);
                sound.setVolume(0.75);
                sound.setNumberOfLoops(-1);
                if (itemSound.type === 'sound') {
                    dispatch(
                        addSound({
                            ...itemSound,
                            sound,
                        }),
                    );
                } else {
                    dispatch(
                        addMusic({
                            ...itemSound,
                            sound,
                        }),
                    );
                }
                if (!isPlaying) {
                    dispatch(play());
                }
            });
        }
    };
    useEffect(() => {
        if (isPlaying) {
            playPlayer();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sounds, music, isPlaying]);

    const changeType = (index: number) => {
        setActiveIndex(index);
    };
    useEffect(() => {
        changeType(index);
    }, [index]);
    return (
        <AppBackground>
            <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
                <Text style={styles.screenTitle}>Create your mix</Text>
                <View style={styles.segment}>
                    <Text
                        onPress={() => changeType(0)}
                        style={[styles.segItem, activeIndex === 0 && styles.segItemActive]}>
                        Sounds
                    </Text>
                    <Text
                        onPress={() => changeType(1)}
                        style={[styles.segItem, activeIndex === 1 && styles.segItemActive]}>
                        Music
                    </Text>
                </View>
                {activeIndex === 0 ? (
                    <ListSounds addSoundToMixer={addSoundToMixer} sounds={sounds} />
                ) : (
                    <ListMusics addSoundToMixer={addSoundToMixer} music={music} />
                )}

                {(sounds.length > 0 || music) && <CurrentMixFloat />}
            </SafeAreaView>
        </AppBackground>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 8 },
    screenTitle: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 20,
        marginBottom: 14,
    },
    segment: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: 999,
        padding: 4,
        marginBottom: 18,
    },
    segItem: {
        color: Colors.textMuted,
        fontWeight: '700',
        fontSize: 14,
        paddingVertical: 8,
        paddingHorizontal: 28,
        borderRadius: 999,
        overflow: 'hidden',
    },
    segItemActive: {
        color: Colors.onAccent,
        backgroundColor: Colors.accent,
    },
    customeStyle: {
        marginBottom: 40,
    },
    flatlist: {
        marginVertical: 20,
        flex: 1,
    },
    buttonUpgrade: {
        backgroundColor: Colors.light,
        borderRadius: 20,
        marginRight: 20,
    },
    titleButtonUpgrade: {
        fontSize: 12,
        marginLeft: 5,
    },
    columnStyles: {},
    iconSetting: {
        marginRight: 10,
    },
});
export default ComposerScreen;
