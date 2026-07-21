import React, { FC } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SoundItem from './SoundItem';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { clearSounds as clearAction, removeSound as removeAction } from 'store/player';
import { Colors, Radius } from 'styles/global.style';
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
            return (
                <Button
                    title="Clear all"
                    onPress={clearSounds}
                    type="clear"
                    icon={{ name: 'trash-outline', type: 'ionicon', size: 16, color: Colors.textMuted }}
                    buttonStyle={styles.buttonClear}
                    titleStyle={styles.buttonClearTitle}
                />
            );
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
            {sounds.length === 0 && (
                <Button
                    title="Add sound"
                    onPress={goToChooseSound}
                    buttonStyle={styles.buttonAdd}
                    titleStyle={styles.buttonAddTitle}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    buttonAdd: {
        borderRadius: Radius.pill,
        marginHorizontal: 40,
        marginTop: 12,
        backgroundColor: Colors.accent,
        paddingVertical: 12,
    },
    buttonAddTitle: {
        color: Colors.primary,
        fontWeight: '700',
    },
    buttonClear: {
        borderRadius: Radius.pill,
        alignSelf: 'center',
        marginTop: 6,
        paddingHorizontal: 20,
    },
    buttonClearTitle: {
        color: Colors.textMuted,
        fontSize: 14,
        marginLeft: 6,
    },
    textTitle: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 13,
        letterSpacing: 1,
        marginBottom: 10,
    },
    textNumber: {
        color: Colors.textMuted,
    },
});
export default ListSounds;
