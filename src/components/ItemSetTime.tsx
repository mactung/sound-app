import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ItemSetTime = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 30,
    },
    name: {
        fontSize: 16,
        color: '#fff',
    },
});
export default ItemSetTime;
