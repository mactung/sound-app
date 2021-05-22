import React, { FC } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'styles/global.style';
import data from '../data.json';
import ItemMix from './ItemMix';
interface Iprops {
    title: string;
}
const PlayList: FC<Iprops> = ({ title }) => {
    const renderItem = ({ item }: any) => <ItemMix item={item} />;
    return (
        <View>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListCotainer}
                horizontal
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    title: { color: Colors.white, fontSize: 22, fontWeight: 'bold', marginBottom: 15, marginLeft: 20 },
    imageHeader: {
        height: 300,
        width: '100%',
    },
    flatListCotainer: { justifyContent: 'space-between' },
    separator: {
        width: 10,
    },
});
export default PlayList;
