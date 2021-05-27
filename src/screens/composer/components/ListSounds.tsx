import services from 'models/services';
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
import CategoryFilter from './CategoryFilter';
import SoundItem from './SoundItem';
const ListSounds = ({ addSoundToMixer, sounds }: any) => {
    const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);
    const [dataSounds, setDataSounds] = useState<any[]>([]);
    useEffect(() => {
        const soundsService = services.soundService.getSoundsByCategoryId(currentCategoryId);
        setData(soundsService);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sounds]);
    const setData = data => {
        console.log(data);
        setDataSounds(
            data.map(item => {
                if (sounds.some(sound => sound._id === item._id)) {
                    item.is_selected = true;
                } else {
                    item.is_selected = false;
                }
                return item;
            }),
        );
    };
    const renderItem = useCallback(
        ({ item, index }: any) => <SoundItem item={item} onPress={addSoundToMixer} index={index} />,
        [],
    );
    return (
        <>
            <CategoryFilter
                setData={setData}
                currentCategoryId={currentCategoryId}
                setCurrentCategoryId={setCurrentCategoryId}
            />
            <ScrollView horizontal={true}>
                <FlatList data={dataSounds} renderItem={renderItem} numColumns={6} />
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    buttonUpgrade: {
        backgroundColor: Colors.light,
        borderRadius: 20,
    },
});
export default ListSounds;
