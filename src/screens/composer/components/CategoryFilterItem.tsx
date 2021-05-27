import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from 'styles/global.style';
const CategoryFilterItem = ({ item, onPress, currentCategoryId }: any) => {
    return (
        <Pressable
            style={[styles.container, currentCategoryId === item._id && { backgroundColor: Colors.light }]}
            onPress={() => onPress(item._id)}>
            <Text style={styles.nameText}>{item.name}</Text>
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
        height: 30,
        borderWidth: 1,
        borderColor: Colors.light,
    },
    nameText: {
        color: Colors.white,
    },
});

export default CategoryFilterItem;
