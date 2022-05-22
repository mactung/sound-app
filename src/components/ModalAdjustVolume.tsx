import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Colors } from 'styles/global.style';
const { width } = Dimensions.get('screen');
const ModalAdjustVolume = ({ sounds, setIsShowAdjustVolume }: any) => {
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
        <View style={styles.container}>
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
                thumbTintColor={Colors.bright}
                thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                thumbProps={{
                    children: (
                        <Icon
                            name="radio-button-on"
                            type="ionicon"
                            size={21}
                            containerStyle={{ bottom: 2, left: 0 }}
                            color="#fff"
                        />
                    ),
                }}
                minimumTrackTintColor={Colors.bright}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        position: 'absolute',
        top: 110,
        left: (width - width / 1.1) / 2,
        backgroundColor: Colors.opacity_background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.light,
    },
    soundName: {
        color: Colors.white,
        width: '18%',
    },
    slider: {
        width: '80%',
    },
});

export default ModalAdjustVolume;
