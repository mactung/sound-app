import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
import MusicItem from './MusicItem';
const CategoryMusicItem = ({ itemCategory, addSoundToMixer }: any) => {
    const renderItem = ({ item }: any) => <MusicItem itemMusic={item} addSoundToMixer={addSoundToMixer} />;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{itemCategory.name}</Text>
            <FlatList data={itemCategory.sounds} renderItem={renderItem} horizontal />
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
        marginBottom: 20,
        fontSize: 18,
    },
});
export default CategoryMusicItem;
