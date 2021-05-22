import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Mixer from './Mixer';
import { Colors } from 'styles/global.style';
import { useSelector } from 'react-redux';
import usePlayer from 'hooks/usePlayer';

const CurrentMixFloat = () => {
    const { sounds, isPlaying } = useSelector((state: any) => state.player);
    const { pausePlayer, playPlayer } = usePlayer();
    const [isVisibleMixer, setIsVisibleMixer] = useState<boolean>(false);
    return (
        <TouchableOpacity style={styles.container} onPress={() => setIsVisibleMixer(true)}>
            <Icon size={20} name="chevron-up" type="ionicon" color={Colors.white} />
            <View style={styles.centerView}>
                <Text style={styles.text}>{sounds.length} items</Text>
                <Text style={styles.text}>Current Mix</Text>
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
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '90%',
        bottom: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.secondary,
    },
    centerView: {
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
    },
});
export default CurrentMixFloat;
