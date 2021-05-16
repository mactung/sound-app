import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import AudioContext from 'contexts/AudioContext';
const Player = () => {
    const { isPlaying, pauseAudio, playAudio }: any = useContext(AudioContext);
    const [isSave, setIsSave] = useState<boolean>(false);
    const saveMix = () => {
        setIsSave(!isSave);
    };
    return (
        <View style={styles.container}>
            <Icon size={32} name="timer-outline" type="ionicon" color="#517fa4" />
            <Icon
                size={80}
                name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'}
                type="ionicon"
                color="#517fa4"
                onPress={isPlaying ? pauseAudio : playAudio}
            />

            <Icon
                size={32}
                name={isSave ? 'heart' : 'heart-outline'}
                type="ionicon"
                color="#517fa4"
                onPress={saveMix}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
export default Player;
