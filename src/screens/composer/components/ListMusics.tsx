import services from 'models/services';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CategoryMusicItem from './CategoryMusicItem';
const ListMusics = ({ addSoundToMixer, music }: any) => {
    const [dataMusics, setDataMusics] = useState<any[]>([]);
    const renderItem = ({ item }: any) => (
        <CategoryMusicItem itemCategory={item} addSoundToMixer={addSoundToMixer} music={music} />
    );
    useEffect(() => {
        const dataMusicService = services.categoryService.getAllCategoriesByType('music');
        setDataMusics(dataMusicService);
    }, []);
    return (
        <View>
            <FlatList
                data={dataMusics}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
export default ListMusics;
