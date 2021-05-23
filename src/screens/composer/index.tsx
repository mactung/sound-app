import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import CurrentMixFloat from 'components/CurrenMixFloat';
import data from './data.json';
import SoundItem from './components/SoundItem';
import CategoryFilterItem from './components/CategoryFilterItem';
import { Colors } from 'styles/global.style';
import { useDispatch, useSelector } from 'react-redux';
import { addSound, play } from 'store/player';
import usePlayer from 'hooks/usePlayer';
Sound.setCategory('Playback');
const ComposerScreen = () => {
    const dispatch = useDispatch();
    const { playPlayer } = usePlayer();
    const { sounds, isPlaying } = useSelector((state: any) => state.player);
    const addSoundToMixer = (itemSound: any) => {
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
            
        });
    };
    const renderItem = ({ item, index }: any) => <SoundItem item={item} onPress={addSoundToMixer} index={index} />;
    const renderItemCategoryFilter = () => <CategoryFilterItem />;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sounds</Text>
            <FlatList data={data} renderItem={renderItemCategoryFilter} horizontal style={styles.flatlist} />
            <ScrollView horizontal={true}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    numColumns={Math.ceil(data.length / 4)}
                    columnWrapperStyle={styles.columnStyles}
                />
            </ScrollView>
            {sounds.length > 0 && <CurrentMixFloat />}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    title: {
        color: Colors.white,
        fontSize: 32,
        marginLeft: 20,
    },
    customeStyle: {
        marginBottom: 40,
    },
    flatlist: {
        marginVertical: 20,
        flex: 1,
    },
    columnStyles: {},
});
export default ComposerScreen;
