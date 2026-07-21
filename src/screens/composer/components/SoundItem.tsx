import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors, Radius } from 'styles/global.style';
import { SoundIcon } from 'assets/svg';
import { SoundType } from 'types/sound';
interface Iprops {
    onPress: () => void;
    item: SoundType;
    index: number;
}

// Stagger the hanging string length per column so ornaments dangle naturally.
const STRING_HEIGHTS = [16, 30, 22];

const SoundItem: FC<Iprops> = ({ onPress, item, index }) => {
    const stringHeight = STRING_HEIGHTS[index % STRING_HEIGHTS.length];
    return (
        <Pressable style={styles.wrapper} onPress={onPress}>
            {/* string hanging from the branch above */}
            <View style={[styles.string, { height: stringHeight }]} />
            <View style={styles.knot} />
            {/* the ornament */}
            <View style={[styles.ornament, item.is_selected && styles.ornamentActive]}>
                <SoundIcon width={30} height={30} />
            </View>
            <Text style={[styles.title, item.is_selected && styles.titleActive]} numberOfLines={2}>
                {item.name}
            </Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1 / 3,
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    string: {
        width: 2,
        backgroundColor: Colors.branch,
        opacity: 0.7,
    },
    knot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.branch,
        marginBottom: -3,
        zIndex: 2,
    },
    ornament: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: Colors.card,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    ornamentActive: {
        backgroundColor: Colors.accent,
        borderColor: Colors.white,
        shadowColor: Colors.accent,
        shadowOpacity: 0.7,
        shadowRadius: 12,
    },
    title: {
        color: Colors.textMuted,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 14,
        borderRadius: Radius.sm,
    },
    titleActive: {
        color: Colors.white,
        fontWeight: '600',
    },
});
export default SoundItem;
