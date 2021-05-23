import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { Button, Icon } from 'react-native-elements';
Sound.setCategory('Playback');
const ComposerScreen = () => {
    const dispatch = useDispatch();
    const { playPlayer } = usePlayer();
    const { sounds, isPlaying } = useSelector((state: any) => state.player);
    const [activeIndex, setActiveIndex] = useState<number>(0);
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
    const changeType = (index: number) => {
        setActiveIndex(index);
    };
    const renderItem = ({ item, index }: any) => <SoundItem item={item} onPress={addSoundToMixer} index={index} />;
    const renderItemCategoryFilter = () => <CategoryFilterItem />;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewHeader}>
                <Text onPress={() => changeType(0)} style={[styles.title, activeIndex === 0 && styles.activeTitle]}>
                    Sounds
                </Text>
                <Text onPress={() => changeType(1)} style={[styles.title, activeIndex === 1 && styles.activeTitle]}>
                    Music
                </Text>
                <Button
                    title="Upgrade"
                    icon={<Icon name="lock-open-outline" type="ionicon" size={15} color="white" />}
                    buttonStyle={styles.buttonUpgrade}
                />
            </View>

            {activeIndex === 0 ? (
                <>
                    <FlatList data={data} renderItem={renderItemCategoryFilter} horizontal style={styles.flatlist} />
                    <ScrollView horizontal={true}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            numColumns={Math.ceil(data.length / 4)}
                            columnWrapperStyle={styles.columnStyles}
                        />
                    </ScrollView>
                </>
            ) : (
                <Text />
            )}

            {sounds.length > 0 && <CurrentMixFloat />}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    viewHeader: {
        flexDirection: 'row',
    },
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
    },
    columnStyles: {},
});
export default ComposerScreen;
