import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
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
        borderRadius: 30,
        paddingHorizontal: 20,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light,
        height: 30,
    },
});

export default CategoryFilterItem;
