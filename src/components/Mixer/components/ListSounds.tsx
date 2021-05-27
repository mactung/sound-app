import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SoundItem from './SoundItem';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { clearSounds as clearAction, removeSound as removeAction } from 'store/player';
import { Colors } from 'styles/global.style';
const ListSounds = ({ sounds }: any) => {
    const dispatch = useDispatch();
    const clearSounds = () => {
        dispatch(clearAction());
    };
    const removeSound = (fileName: string) => {
        dispatch(removeAction(fileName));
    };
    const renderItem = ({ item }: any) => {
        if (item.key === 'end') {
            return <Button title="Clear all" onPress={clearSounds} buttonStyle={styles.buttonView} />;
        }
        return <SoundItem key={item._id} item={item} removeSound={removeSound} />;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                SOUNDS{' '}
                <Text style={styles.textNumber}>({sounds.length < 10 ? '0' + sounds.length : sounds.length}/10)</Text>
            </Text>
            <FlatList
                data={sounds.length > 0 ? [...sounds, { key: 'end' }] : sounds}
                renderItem={renderItem}
                bounces={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonView: {
        borderRadius: 30,
        marginHorizontal: 40,
        backgroundColor: Colors.dark,
        borderColor: Colors.light,
        borderWidth: 1,
    },
    textTitle: {
        color: Colors.white,
        fontWeight: '500',
        marginBottom: 10,
    },
    textNumber: {
        color: Colors.gray,
    },
});
export default ListSounds;
