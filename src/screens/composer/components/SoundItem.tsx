import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from 'styles/global.style';
interface Iprops {
    onPress: (value: string) => void;
    item: any;
    index: number;
}

const SoundItem: FC<Iprops> = ({ onPress, item }) => {
    console.log('re render');
    
    return (
        <Pressable style={styles.container} onPress={() => onPress(item)}>
            <Text style={item.is_selected && { color: Colors.orange }}>{item.name}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.orange,
        marginBottom: 80,
        marginLeft: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SoundItem;
