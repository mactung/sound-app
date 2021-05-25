import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
import MusicItem from './MusicItem';
const CategoryMusicItem = ({ data }) => {
    const renderItem = () => <MusicItem data={data} />;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Category Name</Text>
            <FlatList data={data} renderItem={renderItem} horizontal />
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
