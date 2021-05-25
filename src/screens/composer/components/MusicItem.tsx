import React, { FC } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from 'styles/global.style';
interface Iprops {
    onPress: (value: string) => void;
    item: any;
    index: number;
}

const MusicItem: FC<Iprops> = () => {
    console.log('re render');

    return (
        <Pressable style={styles.container}>
            <Text style={styles.nameText}>Music Name</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 150,
        borderRadius: 10,
        backgroundColor: Colors.orange,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
    },
    nameText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
});

export default MusicItem;
