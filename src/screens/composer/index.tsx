import React, { useContext } from 'react';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AudioContext from 'contexts/AudioContext';
import Sound from 'react-native-sound';
import CurrentMixFloat from 'components/CurrenMixFloat';

const ComposerScreen = () => {
    const { isPlaying, pauseAudio, playAudio, sounds, addSound, clearSounds }: any = useContext(AudioContext);

    const addSoundToMixer = (name: string) => {
        const sound = new Sound(name + '.mp3', Sound.MAIN_BUNDLE, error => {
            sound.play();
        });
        addSound({
            name,
            sound,
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <Button onPress={() => addSoundToMixer('ocean')} title="Ocean" />
            <Button onPress={() => addSoundToMixer('forest')} title="Forest" />
            {sounds.length > 0 && <CurrentMixFloat />}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1 },
});
export default ComposerScreen;
