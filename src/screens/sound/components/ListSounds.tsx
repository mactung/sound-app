import React from 'react';
import { FlatList } from 'react-native';
import ItemSound from 'screens/home/components/ItemSound';

const ListSounds = () => {
    const data = [
        {
            name: 'ocean',
        },
    ];
    const renderItem = ({ item }) => {<ItemSound item={item} />;
    return (
        <View>
            <FlatList data={[...data, { type: 'addItem' }]} renderItem={renderItem} horizontal />
        </View>
    );
};
