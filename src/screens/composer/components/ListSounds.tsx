import services from 'models/services';
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { SoundType } from 'types/sound';
import CategoryFilter from './CategoryFilter';
import SoundItem from './SoundItem';
interface Iprops {
    sounds: SoundType[];
    addSoundToMixer: () => void;
}
const ListSounds = ({ addSoundToMixer, sounds }: any) => {
    const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);
    const [dataSounds, setDataSounds] = useState<any[]>([]);
    useEffect(() => {
        const soundsService = services.soundService.getSoundsByCategoryId(currentCategoryId);
        setData(soundsService);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sounds]);
    const setData = (data: SoundType[]) => {
        setDataSounds(
            data.map((item: SoundType) => {
                if (sounds.some((sound: SoundType) => sound._id === item._id)) {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
export default ListSounds;
