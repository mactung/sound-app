import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Slider } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Radius } from 'styles/global.style';
const { width } = Dimensions.get('screen');
const ModalAdjustVolume = ({ sounds, setIsShowAdjustVolume }: any) => {
    const insets = useSafeAreaInsets();
    const [volume, setVolume] = useState<number>(
        sounds[sounds.length - 1] ? sounds[sounds.length - 1].sound.getVolume() * 100 : 100,
    );
    let myTimeout: any;

    const hideModal = () => {
        clearTimeout(myTimeout);
        myTimeout = setTimeout(() => {
            setIsShowAdjustVolume(false);
        }, 2000);
    };
    useEffect(() => {
        hideModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeValue = (value: number) => {
        setVolume(value);
        sounds[sounds.length - 1].sound.setVolume(value / 100);
        hideModal();
    };
    return (
        <View style={[styles.container, { top: insets.top + 64 }]}>
            <Text style={styles.soundName} numberOfLines={1}>
                {sounds[sounds.length - 1].name}
            </Text>
            <Slider
                style={styles.slider}
                value={volume}
                maximumValue={100}
                minimumValue={0}
                step={1}
                onValueChange={onChangeValue}
                trackStyle={styles.track}
                minimumTrackTintColor={Colors.accent}
                maximumTrackTintColor={Colors.divider}
                thumbTintColor={Colors.white}
                thumbStyle={styles.thumbStyle}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 16,
        position: 'absolute',
        left: (width - width / 1.1) / 2,
        backgroundColor: Colors.opacity_background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.glassBorder,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
    },
    soundName: {
        color: Colors.white,
        width: '18%',
    },
    slider: {
        width: '80%',
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
    },
});

export default ModalAdjustVolume;
