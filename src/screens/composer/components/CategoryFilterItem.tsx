import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Colors } from 'styles/global.style';
const CategoryFilterItem = () => {
    return (
        <Pressable style={styles.container}>
            <Text>Filter</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light,
    },
});

export default CategoryFilterItem;
