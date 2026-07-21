import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import useMixLibrary, { SavedMix } from 'hooks/useMixLibrary';
import { Colors, Radius, Spacing } from 'styles/global.style';

const MyMixList = () => {
    const { mixes, reload, deleteMix, loadMix } = useMixLibrary();

    useFocusEffect(
        useCallback(() => {
            reload();
        }, [reload]),
    );

    if (mixes.length === 0) {
        return null;
    }

    const renderItem = ({ item }: { item: SavedMix }) => {
        const count = item.sounds.length + (item.music ? 1 : 0);
        return (
            <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => loadMix(item)}>
                <TouchableOpacity style={styles.delete} onPress={() => deleteMix(item._id)} hitSlop={8}>
                    <Icon name="close" type="ionicon" size={16} color={Colors.white} />
                </TouchableOpacity>
                <Icon name="play-circle" type="ionicon" size={40} color={Colors.accent} />
                <Text style={styles.name} numberOfLines={1}>
                    {item.name}
                </Text>
                <Text style={styles.meta}>
                    {count} {count > 1 ? 'sounds' : 'sound'}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>My Mix</Text>
            <FlatList
                horizontal
                data={mixes}
                keyExtractor={item => String(item._id)}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: Spacing.lg,
        marginBottom: Spacing.md,
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 15,
        marginLeft: Spacing.md,
    },
    list: {
        paddingHorizontal: Spacing.md,
    },
    card: {
        width: 130,
        height: 130,
        borderRadius: Radius.lg,
        backgroundColor: Colors.card,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        marginRight: Spacing.sm,
        padding: Spacing.sm,
        justifyContent: 'center',
    },
    delete: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.12)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: '600',
        marginTop: 10,
    },
    meta: {
        color: Colors.textMuted,
        fontSize: 12,
        marginTop: 2,
    },
});

export default MyMixList;
