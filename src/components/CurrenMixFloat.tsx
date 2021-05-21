import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Mixer from './Mixer';
import AudioContext from 'contexts/AudioContext';
import { Colors } from 'styles/global.style';
const CurrentMixFloat = () => {
    const { sounds, isPlaying, pauseAudio, playAudio }: any = useContext(AudioContext);
    const [isVisibleMixer, setIsVisibleMixer] = useState<boolean>(false);
    return (
        <TouchableOpacity style={styles.container} onPress={() => setIsVisibleMixer(true)}>
            <Icon size={20} name="chevron-up" type="ionicon" color="#517fa4" />
            <View style={styles.centerView}>
                <Text>{sounds.length} items</Text>
                <Text>Current Mix</Text>
            </View>
            <Icon
                size={30}
                name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'}
                type="ionicon"
                color="#517fa4"
                onPress={isPlaying ? pauseAudio : playAudio}
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
});
export default CurrentMixFloat;
