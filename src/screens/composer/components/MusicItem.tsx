import React, { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
import { MusicIcon } from 'assets/svg';
import { SoundType } from 'types/sound';
interface Iprops {
    addSoundToMixer: (value: SoundType) => void;
    itemMusic: SoundType;
}

const MusicItem: FC<Iprops> = ({ itemMusic, addSoundToMixer }) => {
    return (
        <Pressable
            style={[styles.container, itemMusic.is_selected && styles.activeItem]}
            onPress={() => addSoundToMixer(itemMusic)}>
            <MusicIcon width={50} height={50} style={styles.iconMusic} />
            <Text style={styles.nameText}>{itemMusic.name}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 180,
        borderRadius: 10,
        backgroundColor: 'rgba(64, 50, 50, 0.3)',
        marginLeft: 20,
        justifyContent: 'flex-end',
        padding: 10,
    },
    activeItem: {
        backgroundColor: Colors.orange,
    },
    nameText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    iconMusic: {
        marginBottom: 50,
        alignSelf: 'center',
    },
});

export default MusicItem;
