import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SoundItem from './SoundItem';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { clearSounds as clearAction, removeSound as removeAction } from 'store/player';
const ListSounds = ({ sounds }: any) => {
    const dispatch = useDispatch();
    const clearSounds = () => {
        dispatch(clearAction());
    };
    const removeSound = (type: string) => {
        dispatch(removeAction(type));
    };
    const renderItem = ({ item }: any) => {
        if (item.key === 'end') {
            return <Button title="Clear all" onPress={clearSounds} />;
        }
        return <SoundItem item={item} removeSound={removeSound} />;
    };
    return (
        <View style={styles.container}>
            <Text>Sounds ({sounds.length} / 10 )</Text>
            <FlatList
                data={sounds.length > 0 ? [...sounds, { key: 'end' }] : sounds}
                renderItem={renderItem}
                scrollEnabled={false}
                bounces={false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 300,
    },
});
export default ListSounds;
