import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from 'styles/global.style';
import { SoundType } from 'types/sound';
interface Iprops {
    setIsModalVisible: (value: any) => void;
    sounds: SoundType[];
    music: SoundType;
}
const HeaderMixer: FC<Iprops> = ({ setIsModalVisible, sounds, music }) => {
    return (
        <View style={styles.container}>
            <Icon
                size={32}
                name="chevron-down"
                type="ionicon"
                color="#517fa4"
                onPress={() => setIsModalVisible(false)}
            />
            <View style={styles.centerView}>
                <Text style={styles.titleText}>
                    {sounds.length === 1
                        ? sounds[0].name
                        : sounds.length === 2
                        ? sounds[0].name + ' & ' + sounds[1].name
                        : sounds.length > 0 && sounds.length + ' items'}
                    {music && [sounds.length > 0 ? ' & ' : ''] + music.name}
                </Text>
                <Text style={styles.subText}>Current Mix</Text>
            </View>
            <Icon size={30} name="share-social" type="ionicon" color="#517fa4" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    centerView: {
        alignItems: 'center',
    },
    titleText: {
        color: Colors.white,
        fontWeight: '600',
    },
    subText: {
        color: Colors.light,
    },
});

export default HeaderMixer;
