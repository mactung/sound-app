import React, { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
interface Iprops {
    addSoundToMixer: (value: string) => void;
    itemMusic: any;
}

const MusicItem: FC<Iprops> = ({ itemMusic, addSoundToMixer }) => {
    return (
        <Pressable style={styles.container} onPress={() => addSoundToMixer(itemMusic)}>
            <Text style={styles.nameText}>{itemMusic.name}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 180,
        borderRadius: 10,
        backgroundColor: Colors.orange,
        marginLeft: 20,
        justifyContent: 'flex-end',
        padding: 10,
    },
    nameText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
});

export default MusicItem;
