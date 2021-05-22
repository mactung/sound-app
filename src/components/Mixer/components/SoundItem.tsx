import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Colors } from 'styles/global.style';
const SoundItem = ({ item, removeSound }: any) => {
    const [volume, setVolume] = useState<number>(item.sound.getVolume());
    const onChangeValue = (value: number) => {
        setVolume(value);
        item.sound.setVolume(value);
    };
    const onRemoveSound = () => {
        removeSound(item.type);
    };
    return (
        <View style={styles.container}>
            <Image style={styles.soundIcon} source={require('assets/images/image_large.png')} />
            <View style={styles.content}>
                <Text>{item.name}</Text>
                <Slider
                    value={volume}
                    maximumValue={1}
                    minimumValue={0}
                    step={0.1}
                    onValueChange={onChangeValue}
                    thumbTintColor="#517fa4"
                    thumbStyle={{ height: 20, width: 20, backgroundColor: '#517fa4' }}
                    thumbProps={{
                        children: (
                            <Icon
                                name="help-buoy"
                                type="ionicon"
                                size={20}
                                containerStyle={{ bottom: 0.5, right: 0 }}
                                color="#fff"
                            />
                        ),
                    }}
                />
            </View>
            <Icon
                style={styles.iconClose}
                type="ionicon"
                name="close-circle-outline"
                size={30}
                onPress={onRemoveSound}
                color={Colors.black}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    soundIcon: {
        height: 60,
        width: 60,
    },
    content: {
        width: '85%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    slider: {
        color: '#517fa4',
    },
    iconClose: {
        // position: 'absolute',
        // top: -5,
        // left: -5,
    },
});
export default SoundItem;
