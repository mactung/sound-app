import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Mixer from './Mixer';
import { Colors } from 'styles/global.style';
import { useSelector } from 'react-redux';
import usePlayer from 'hooks/usePlayer';

const CurrentMixFloat = () => {
    const { sounds, isPlaying, music } = useSelector((state: any) => state.player);
    const { pausePlayer, playPlayer } = usePlayer();
    const [isVisibleMixer, setIsVisibleMixer] = useState<boolean>(false);
    const insets = useSafeAreaInsets();
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.container, { bottom: 16 + insets.bottom }]}
            onPress={() => setIsVisibleMixer(true)}>
            <Icon size={20} name="chevron-up" type="ionicon" color={Colors.white} />
            <View style={styles.centerView}>
                <Text style={styles.text} numberOfLines={1}>
                    {sounds.length === 1
                        ? sounds[0].name
                        : sounds.length === 2
                        ? sounds[0].name + ' & ' + sounds[1].name
                        : sounds.length > 0 && sounds.length + ' sounds'}
                    {music && [sounds.length > 0 ? ' & ' : ''] + music.name}
                </Text>
                <Text style={styles.textName}>Current Mix</Text>
            </View>
            <Icon
                size={30}
                name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'}
                type="ionicon"
                color={Colors.white}
                onPress={isPlaying ? pausePlayer : playPlayer}
            />
            <Mixer isModalVisible={isVisibleMixer} setIsModalVisible={setIsVisibleMixer} />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        borderColor: Colors.glassBorder,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.opacity_background,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
    },
    centerView: {
        alignItems: 'center',
        width: '80%',
    },
    text: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 13,
    },
    textName: {
        color: Colors.light,
    },
});
export default CurrentMixFloat;
