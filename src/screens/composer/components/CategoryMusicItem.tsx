import React, { useMemo, FC } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
import { SoundType } from 'types/sound';
import MusicItem from './MusicItem';
interface Iprops {
    itemCategory: any;
    addSoundToMixer: (value: any) => void;
    music: SoundType;
}
const CategoryMusicItem: FC<Iprops> = ({ itemCategory, addSoundToMixer, music }) => {
    const sounds = useMemo(() => {
        return itemCategory.sounds.map((musicItem: SoundType) => {
            if (music && musicItem.file_name === music.file_name) {
                musicItem.is_selected = true;
            } else if (musicItem.is_selected === true) {
                musicItem.is_selected = false;
            }
            return musicItem;
        });
    }, [itemCategory.sounds, music]);
    const renderItem = ({ item }: any) => <MusicItem itemMusic={item} addSoundToMixer={addSoundToMixer} />;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{itemCategory.name}</Text>
            <Text style={styles.subText}>{itemCategory.description}</Text>
            <FlatList data={sounds} renderItem={renderItem} horizontal />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    titleText: {
        color: Colors.white,
        marginLeft: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 18,
    },
    subText: {
        color: Colors.light,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
});
export default CategoryMusicItem;
