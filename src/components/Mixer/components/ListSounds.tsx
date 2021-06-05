import React, { FC } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SoundItem from './SoundItem';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { clearSounds as clearAction, removeSound as removeAction } from 'store/player';
import { Colors } from 'styles/global.style';
import NavigationService from 'navigation/NavigationSerivce';
import { SoundType } from 'types/sound';
interface Iprops {
    sounds: SoundType[];
    setIsModalVisible: (value: boolean) => void;
}
const ListSounds: FC<Iprops> = ({ sounds, setIsModalVisible }) => {
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

    const goToChooseSound = () => {
        setIsModalVisible(false);
        NavigationService.navigate('ComposerScreen', { index: 0 });
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
            {sounds.length === 0 && <Button title="Add sound" onPress={goToChooseSound} />}
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
