import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Colors } from 'styles/global.style';
const SoundItem = ({ item, removeSound }: any) => {
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
            <Image style={styles.soundIcon} source={require('assets/images/image_large.png')} />
            <View style={styles.iconContainer}>
                <Icon
                    type="ionicon"
                    name="close"
                    size={20}
                    onPress={onRemoveSound}
                    color={Colors.white}
                    iconStyle={styles.icon}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Slider
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
                                containerStyle={{ bottom: 0, left: 0 }}
                                color="#fff"
                            />
                        ),
                    }}
                    minimumTrackTintColor={Colors.bright}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    soundIcon: {
        height: 50,
        width: 50,
        borderRadius: 10,
    },
    content: {
        width: '85%',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    slider: {
        color: '#517fa4',
    },
    iconContainer: {
        position: 'absolute',
        top: -10,
        left: 40,
        zIndex: 100,
    },
    icon: {
        backgroundColor: Colors.black,
        borderRadius: 30,
    },
    nameText: {
        color: Colors.white,
    },
});
export default SoundItem;
