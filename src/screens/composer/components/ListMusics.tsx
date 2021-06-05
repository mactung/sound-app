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
        const dataMusicService = services.soundService.getAllMusics();
        setDataMusics(dataMusicService);
    }, []);
    return (
        <View>
            <FlatList data={dataMusics} renderItem={renderItem} />
        </View>
    );
};
export default ListMusics;
