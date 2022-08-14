import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from 'styles/global.style';
import { SoundIcon } from 'assets/svg';
import { SoundType } from 'types/sound';
interface Iprops {
    onPress: () => void;
    item: SoundType;
    index: number;
}

const SoundItem: FC<Iprops> = ({ onPress, item }) => {
    return (
        <Pressable style={[styles.container, item.is_selected && styles.activeItem]} onPress={onPress}>
            <SoundIcon width={35} height={35} />
            <Text style={styles.title} numberOfLines={2}>
                {item.name}
            </Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'rgba(64, 50, 50, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        padding: 3,
        flex: 1 / 3,
    },
    activeItem: {
        backgroundColor: Colors.orange,
    },
    title: {
        color: Colors.white,
    },
});
export default SoundItem;
