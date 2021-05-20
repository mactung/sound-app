import React, { FC } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'styles/global.style';
import data from '../data.json';
import ItemMix from './ItemMix';
interface Iprops {
    title: string;
}
const PlayList: FC<Iprops> = ({ title }) => {
    const renderItem = ({ item, index }: any) => (
        <ItemMix title={item.title} image_url={item.image_url} _id={index} sound_path={item.sound_path} />
    );
    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <FlatList data={data} renderItem={renderItem} contentContainerStyle={styles.flatListCotainer} horizontal />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    title: { color: Colors.white, fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    imageHeader: {
        height: 300,
        width: '100%',
    },
    flatListCotainer: { justifyContent: 'space-between' },
});
export default PlayList;
