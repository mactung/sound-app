import services from 'models/services';
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
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
        if (dataSounds.length == 0) {
            const soundsService = services.soundService.getSoundsByCategoryId(currentCategoryId);
            setData(soundsService);
        } else {
            setData(dataSounds);
        }
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
            <ScrollView horizontal={true} style={styles.scrollView}>
                <FlatList data={dataSounds} renderItem={renderItem} numColumns={3} />
            </ScrollView>
            <View style={styles.floatMixer} />
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {},
    floatMixer: { height: 60 },
});
export default ListSounds;
