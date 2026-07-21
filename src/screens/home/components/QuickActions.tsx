import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationService from 'navigation/NavigationSerivce';
import { Colors, Radius, Spacing } from 'styles/global.style';

interface Tile {
    label: string;
    sub: string;
    icon: string;
    color: string;
    onPress: () => void;
}

const QuickActions = () => {
    const tiles: Tile[] = [
        {
            label: 'Create Mix',
            sub: 'Blend sounds',
            icon: 'add-circle',
            color: Colors.accent,
            onPress: () => NavigationService.navigate('ComposerScreen', { index: 0 }),
        },
        {
            label: 'Relax Mode',
            sub: 'Disc & timer',
            icon: 'moon',
            color: Colors.accent2,
            onPress: () => NavigationService.navigate('BottomTabs', { screen: 'RelaxMode' }),
        },
    ];
    return (
        <View style={styles.row}>
            {tiles.map(t => (
                <TileView key={t.label} tile={t} />
            ))}
        </View>
    );
};

const TileView: FC<{ tile: Tile }> = ({ tile }) => (
    <Pressable style={styles.tile} onPress={tile.onPress}>
        <View style={[styles.iconWrap, { backgroundColor: tile.color }]}>
            <Icon name={tile.icon} type="ionicon" size={22} color={Colors.onAccent} />
        </View>
        <Text style={styles.label}>{tile.label}</Text>
        <Text style={styles.sub}>{tile.sub}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingHorizontal: Spacing.md,
        marginTop: Spacing.md,
    },
    tile: {
        flex: 1,
        backgroundColor: Colors.card,
        borderRadius: Radius.lg,
        padding: Spacing.md,
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
    },
    iconWrap: {
        width: 44,
        height: 44,
        borderRadius: Radius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    label: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: '700',
    },
    sub: {
        color: Colors.textMuted,
        fontSize: 12,
        marginTop: 2,
    },
});

export default QuickActions;
