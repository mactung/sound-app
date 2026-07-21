import React, { useState, FC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Colors, Radius } from 'styles/global.style';
import { SoundIcon } from 'assets/svg';
import { MusicIcon } from 'assets/svg';
import { SoundType } from 'types/sound';
interface Iprops {
    item: SoundType;
    removeSound: (value: string) => void;
}
const SoundItem: FC<Iprops> = ({ item, removeSound }) => {
    const [volume, setVolume] = useState<number>(item.sound.getVolume() * 100);
    const onChangeValue = (value: number) => {
        setVolume(value);
        item.sound.setVolume(value / 100);
    };
    const onRemoveSound = () => {
        removeSound(item.file_name);
    };
    return (
        <View style={styles.container}>
            <View style={styles.soundIcon}>
                {item.type === 'music' ? <MusicIcon width={28} height={28} /> : <SoundIcon width={28} height={28} />}
            </View>

            <View style={styles.content}>
                <Text style={styles.nameText} numberOfLines={1}>
                    {item.name}
                </Text>
                <Slider
                    value={volume}
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    onValueChange={onChangeValue}
                    trackStyle={styles.track}
                    minimumTrackTintColor={Colors.accent}
                    maximumTrackTintColor={Colors.divider}
                    thumbStyle={styles.thumbStyle}
                    thumbTintColor={Colors.white}
                />
            </View>

            <TouchableOpacity style={styles.deleteButton} onPress={onRemoveSound} hitSlop={8}>
                <Icon type="ionicon" name="trash-outline" size={18} color={Colors.textMuted} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        backgroundColor: Colors.card,
        borderRadius: Radius.md,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    soundIcon: {
        height: 46,
        width: 46,
        borderRadius: Radius.sm,
        backgroundColor: 'rgba(137, 194, 217, 0.15)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 14,
        justifyContent: 'center',
    },
    nameText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 2,
    },
    track: {
        height: 5,
        borderRadius: Radius.pill,
    },
    thumbStyle: {
        height: 18,
        width: 18,
        borderRadius: 9,
        backgroundColor: Colors.white,
        borderWidth: 3,
        borderColor: Colors.accent,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    deleteButton: {
        height: 34,
        width: 34,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
    },
});
export default SoundItem;
