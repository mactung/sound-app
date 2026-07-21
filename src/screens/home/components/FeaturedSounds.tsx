import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import services from 'models/services';
import NavigationService from 'navigation/NavigationSerivce';
import { SoundIcon } from 'assets/svg';
import { Colors, Radius, Spacing } from 'styles/global.style';

const FeaturedSounds = () => {
    const sounds = services.soundService.getAllSounds().slice(0, 8);

    const open = () => NavigationService.navigate('ComposerScreen', { index: 0 });

    const renderItem = ({ item }: any) => (
        <Pressable style={styles.card} onPress={open}>
            <View style={styles.iconCircle}>
                <SoundIcon width={26} height={26} />
            </View>
            <Text style={styles.name} numberOfLines={1}>
                {item.name}
            </Text>
        </Pressable>
    );

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.title}>Sounds</Text>
                <Text style={styles.seeAll} onPress={open}>
                    See all
                </Text>
            </View>
            <FlatList
                horizontal
                data={sounds}
                keyExtractor={(item, i) => String(item._id) + i}
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
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.sm,
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '700',
    },
    seeAll: {
        color: Colors.accent,
        fontSize: 13,
        fontWeight: '600',
    },
    list: {
        paddingHorizontal: Spacing.md,
    },
    card: {
        width: 92,
        alignItems: 'center',
        marginRight: Spacing.sm,
    },
    iconCircle: {
        width: 72,
        height: 72,
        borderRadius: Radius.lg,
        backgroundColor: Colors.card,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    name: {
        color: Colors.textMuted,
        fontSize: 12,
        textAlign: 'center',
    },
});

export default FeaturedSounds;
