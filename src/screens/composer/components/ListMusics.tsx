import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryMusicItem from './CategoryMusicItem';
const ListMusics = ({ data }) => {
    const renderItem = () => <CategoryMusicItem data={data} />;
    return (
        <View>
            <FlatList data={data} renderItem={renderItem} />
        </View>
    );
};
export default ListMusics;
