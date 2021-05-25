import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
import CategoryFilterItem from './CategoryFilterItem';
import SoundItem from './SoundItem';
const ListSounds = ({ data, addSoundToMixer, sounds }: any) => {
    const [dataSound, setDataSound] = useState<any[]>([]);
    useEffect(() => {
        setDataSound(
            data.map(item => {
                if (sounds.some(sound => sound._id === item._id)) {
                    item.is_selected = true;
                } else {
                    item.is_selected = false;
                }
                return item;
            }),
        );
    }, [data, sounds]);
    const renderItem = useCallback(
        ({ item, index }: any) => <SoundItem item={item} onPress={addSoundToMixer} index={index} />,
        [],
    );
    const renderItemCategoryFilter = () => <CategoryFilterItem />;
    return (
        <>
            <FlatList data={data} renderItem={renderItemCategoryFilter} horizontal style={styles.flatlist} />
            <ScrollView horizontal={true}>
                <FlatList
                    data={dataSound}
                    renderItem={renderItem}
                    numColumns={Math.ceil(data.length / 4)}
                    columnWrapperStyle={styles.columnStyles}
                />
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    flatlist: {
        marginVertical: 20,
        flex: 1,
    },
    buttonUpgrade: {
        backgroundColor: Colors.light,
        borderRadius: 20,
    },
    columnStyles: {},
});
export default ListSounds;
