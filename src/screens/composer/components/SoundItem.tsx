import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from 'styles/global.style';
import { SoundIcon } from 'assets/svg';
interface Iprops {
    onPress: (value: string) => void;
    item: any;
    index: number;
}

const SoundItem: FC<Iprops> = ({ onPress, item }) => {
    return (
        <Pressable style={[styles.container, item.is_selected && styles.activeItem]} onPress={() => onPress(item)}>
            <SoundIcon width={35} height={35} />
            <Text style={styles.title} numberOfLines={2}>
                {item.name}
            </Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'rgba(64, 50, 50, 0.3)',
        marginBottom: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    activeItem: {
        backgroundColor: Colors.orange,
    },
    title: {
        color: Colors.white,
    },
});
export default SoundItem;
