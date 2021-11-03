import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import CurrentMixFloat from 'components/CurrenMixFloat';
import { Colors } from 'styles/global.style';
import { useDispatch, useSelector } from 'react-redux';
import { addMusic, addSound, play, removeMusic, removeSound } from 'store/player';
import usePlayer from 'hooks/usePlayer';
import ModalAdjustVolume from 'components/ModalAdjustVolume';
import ListSounds from './components/ListSounds';
import ListMusics from './components/ListMusics';
import { useFocusEffect } from '@react-navigation/core';
import RNFS from 'react-native-fs';
import MusicControl, { Command } from 'react-native-music-control';
import shuffle from 'lodash/shuffle';

Sound.setCategory('Playback');
const ComposerScreen = ({ route }: any) => {
    const dispatch = useDispatch();
    const { playPlayer, pausePlayer } = usePlayer();
    const { index } = route.params;
    const { sounds, isPlaying, music } = useSelector((state: any) => state.player);
    const [activeIndex, setActiveIndex] = useState<number>(index ? index : 0);
    const [isShowAdjustVolume, setIsShowAdjustVolume] = useState<boolean>(false);

    useEffect(() => {
        MusicControl.enableBackgroundMode(true);
        MusicControl.handleAudioInterruptions(true);
        MusicControl.enableControl('play', true);
        MusicControl.enableControl('pause', true);
        MusicControl.enableControl('stop', false);
        MusicControl.enableControl('nextTrack', false);
        MusicControl.enableControl('previousTrack', false);
    }, []);

    useEffect(() => {
        MusicControl.on(Command.pause, () => {
            pausePlayer();
        });
        MusicControl.on(Command.play, () => {
            playPlayer();
        });
    }, [pausePlayer, playPlayer]);

    console.log('aaaa');

    useFocusEffect(() => {
        // fetch();
    });
    const addSoundToMixer = (itemSound: any) => {
        const soundPath = './' + itemSound.file_name + '.mp3';

        if (itemSound.is_selected) {
            if (itemSound.type === 'music') {
                dispatch(removeMusic());
            } else {
                setIsShowAdjustVolume(false);
                dispatch(removeSound(itemSound.file_name));
            }
        } else {
            console.log('aaaaaaaaa');
            const sound = new Sound(
                itemSound?.file_name === 'forest'
                    ? require('./forest.mp3')
                    : itemSound?.file_name === 'birds'
                    ? require('./birds.mp3')
                    : itemSound?.file_name === 'ocean'
                    ? require('./ocean.mp3')
                    : require('./winds.mp3'),
                // 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',

                (error: any) => {
                    if (error) {
                        console.log('error', error);
                        return;
                    }
                    if (!isPlaying) {
                        playPlayer();
                    } else {
                        sound.play(success => {
                            if (success) {
                                console.log('successfully finished playing');
                            } else {
                                console.log('playback failed due to audio decoding errors');
                            }
                        });
                    }

                    sound.setCurrentTime(0);
                    sound.setVolume(0.8);
                    sound.setNumberOfLoops(-1);
                    if (itemSound.type === 'sound') {
                        dispatch(
                            addSound({
                                ...itemSound,
                                sound,
                            }),
                        );
                        setIsShowAdjustVolume(true);
                    } else {
                        dispatch(
                            addMusic({
                                ...itemSound,
                                sound,
                            }),
                        );
                    }
                    dispatch(play());
                },
            );
        }
    };
    const changeType = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={require('assets/images/background_sound.png')}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.viewHeader}>
                        <View style={styles.menu}>
                            <Text
                                onPress={() => changeType(0)}
                                style={[styles.title, activeIndex === 0 && styles.activeTitle]}>
                                Sounds
                            </Text>
                            <Text
                                onPress={() => changeType(1)}
                                style={[styles.title, activeIndex === 1 && styles.activeTitle]}>
                                Music
                            </Text>
                        </View>
                        {/* <Button
                            title="Upgrade"
                            icon={<Icon name="lock-open-outline" type="ionicon" size={14} color="white" />}
                            buttonStyle={styles.buttonUpgrade}
                            titleStyle={styles.titleButtonUpgrade}
                        /> */}
                    </View>
                    {activeIndex === 0 ? (
                        <ListSounds addSoundToMixer={addSoundToMixer} sounds={sounds} />
                    ) : (
                        <ListMusics addSoundToMixer={addSoundToMixer} music={music} />
                    )}

                    {(sounds.length > 0 || music) && <CurrentMixFloat />}
                    {isShowAdjustVolume && (
                        <ModalAdjustVolume sounds={sounds} setIsShowAdjustVolume={setIsShowAdjustVolume} />
                    )}
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: { flex: 1 },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    menu: { flexDirection: 'row' },
    title: {
        color: Colors.gray,
        fontSize: 28,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: Colors.white,
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
});
export default ComposerScreen;
