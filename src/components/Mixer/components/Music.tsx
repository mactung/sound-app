import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { Colors } from 'styles/global.style';
import SoundItem from './SoundItem';
import { removeMusic } from 'store/player';

const Music = ({ music }: any) => {
    const dispatch = useDispatch();
    const removeSound = () => {
        dispatch(removeMusic());
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                MUSIC <Text style={styles.textNunber}>(0/1)</Text>
            </Text>
            {music ? (
                <SoundItem item={music} removeSound={removeSound} />
            ) : (
                <>
                    <Text style={styles.subText}>You don't have any music in this mix.</Text>
                    <Button buttonStyle={styles.buttonView} title="Add Music" />
                </>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        borderBottomWidth: 0.18,
        borderBottomColor: Colors.light,
        paddingVertical: 10,
    },
    textTitle: {
        color: Colors.white,
        fontWeight: '500',
    },
    text: {
        color: Colors.white,
        marginBottom: 20,
    },
    buttonView: {
        borderRadius: 30,
        backgroundColor: Colors.dark,
        borderColor: Colors.light,
        borderWidth: 1,
        width: 150,
    },
    textNunber: {
        color: Colors.gray,
    },
    subText: {
        color: Colors.gray,
    },
});
export default Music;
