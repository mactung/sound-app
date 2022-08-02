import React, { useState, FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Colors } from 'styles/global.style';
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
            <View style={styles.iconContainer}>
                <Icon
                    type="ionicon"
                    name="close"
                    size={18}
                    onPress={onRemoveSound}
                    color={Colors.white}
                    iconStyle={styles.icon}
                />
            </View>
            <View style={styles.soundIcon}>
                {item.type === 'music' ? <MusicIcon width={30} height={30} /> : <SoundIcon width={30} height={30} />}
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
                    thumbTintColor={Colors.bright}
                    thumbStyle={styles.thumbStyle}
                    thumbProps={{
                        children: (
                            <Icon
                                name="radio-button-on"
                                type="ionicon"
                                size={21}
                                containerStyle={styles.thumbProps}
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
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: Colors.orange,
        borderRadius: 50,
    },
    nameText: {
        color: Colors.white,
    },
    thumbStyle: {
        height: 20,
        width: 20,
        backgroundColor: 'transparent',
    },
    thumbProps: {
        bottom: 1,
        left: 0,
    },
});
export default SoundItem;
