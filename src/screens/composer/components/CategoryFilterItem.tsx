import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors, Radius } from 'styles/global.style';
const CategoryFilterItem = ({ item, onPress, currentCategoryId }: any) => {
    const active = currentCategoryId === item._id;
    return (
        <Pressable style={[styles.container, active && styles.active]} onPress={() => onPress(item._id)}>
            <Text style={[styles.nameText, active && styles.nameTextActive]}>{item.name}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: Radius.pill,
        paddingHorizontal: 18,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 34,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.12)',
    },
    active: {
        backgroundColor: Colors.accent,
        borderColor: Colors.accent,
    },
    nameText: {
        color: Colors.textMuted,
        fontWeight: '600',
        fontSize: 13,
    },
    nameTextActive: {
        color: Colors.onAccent,
    },
});

export default CategoryFilterItem;
