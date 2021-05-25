import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import CurrentMixFloat from 'components/CurrenMixFloat';
import data from './data.json';
import { Colors } from 'styles/global.style';
import { useDispatch, useSelector } from 'react-redux';
import { addSound, play, removeSound } from 'store/player';
import usePlayer from 'hooks/usePlayer';
import { Button, Icon } from 'react-native-elements';
import ModalAdjustVolume from 'components/ModalAdjustVolume';
import ListSounds from './components/ListSounds';
import ListMusics from './components/ListMusics';
Sound.setCategory('Playback');
const ComposerScreen = () => {
    const dispatch = useDispatch();
    const { playPlayer } = usePlayer();
    const { sounds, isPlaying } = useSelector((state: any) => state.player);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isShowAdjustVolume, setIsShowAdjustVolume] = useState<boolean>(false);
    const addSoundToMixer = (itemSound: any) => {
        if (itemSound.is_selected) {
            dispatch(removeSound(itemSound.type));
        } else {
            const sound = new Sound(itemSound.type + '.mp3', Sound.MAIN_BUNDLE, error => {
                if (!isPlaying) {
                    playPlayer();
                } else {
                    sound.play();
                }
                sound.setVolume(0.8);
                sound.setNumberOfLoops(-1);
                dispatch(
                    addSound({
                        ...itemSound,
                        sound,
                    }),
                );
                dispatch(play());
                setIsShowAdjustVolume(true);
            });
        }
    };
    const changeType = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewHeader}>
                <View style={styles.menu}>
                    <Text onPress={() => changeType(0)} style={[styles.title, activeIndex === 0 && styles.activeTitle]}>
                        Sounds
                    </Text>
                    <Text onPress={() => changeType(1)} style={[styles.title, activeIndex === 1 && styles.activeTitle]}>
                        Music
                    </Text>
                </View>
                <Button
                    title="Upgrade"
                    icon={<Icon name="lock-open-outline" type="ionicon" size={14} color="white" />}
                    buttonStyle={styles.buttonUpgrade}
                    titleStyle={styles.titleButtonUpgrade}
                />
            </View>
            {activeIndex === 0 ? (
                <ListSounds data={data} addSoundToMixer={addSoundToMixer} sounds={sounds} />
            ) : (
                <ListMusics data={data} />
            )}

            {sounds.length > 0 && <CurrentMixFloat />}
            {isShowAdjustVolume && <ModalAdjustVolume sounds={sounds} setIsShowAdjustVolume={setIsShowAdjustVolume} />}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
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
