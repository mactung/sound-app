import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from 'styles/global.style';
import { soundIcon } from 'utils/soundIcon';
import { SoundType } from 'types/sound';
interface Iprops {
    onPress: () => void;
    item: SoundType;
    index: number;
}

const SoundItem: FC<Iprops> = ({ onPress, item }) => {
    const active = !!item.is_selected;
    return (
        <Pressable style={styles.wrapper} onPress={onPress}>
            <View style={[styles.circle, active && styles.circleActive]}>
                <Icon
                    name={soundIcon(item.name || item.file_name)}
                    type="ionicon"
                    size={28}
                    color={active ? Colors.onAccent : Colors.white}
                />
            </View>
            <Text style={[styles.title, active && styles.titleActive]} numberOfLines={1}>
                {item.name}
            </Text>
        </Pressable>
    );
};
const TILE = 70;
const styles = StyleSheet.create({
    wrapper: {
        width: '25%',
        alignItems: 'center',
        marginBottom: 22,
        paddingHorizontal: 2,
    },
    circle: {
        width: TILE,
        height: TILE,
        borderRadius: TILE / 2,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderWidth: 1.5,
        borderColor: 'rgba(255,255,255,0.12)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleActive: {
        backgroundColor: Colors.accent,
        borderColor: Colors.white,
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 14,
        elevation: 8,
    },
    title: {
        color: Colors.textMuted,
        fontSize: 11,
        textAlign: 'center',
        marginTop: 8,
        maxWidth: TILE + 12,
    },
    titleActive: {
        color: Colors.white,
        fontWeight: '600',
    },
});
export default SoundItem;
