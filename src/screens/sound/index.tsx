import React, { MutableRefObject, useEffect, useState, useRef, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
import ListSounds from './components/ListSounds';
import ModalSetTime from 'components/ModalSetTime';
const { width } = Dimensions.get('screen');
import AudioContext from 'contexts/AudioContext';

const SoundScreen = ({ route }: any) => {
    const { sound_path, image_url, name } = route.params;
    const { isPlaying, pauseAudio, playAudio, sounds, addSound, clearSounds }: any = useContext(AudioContext);
    const [isModalSetTimeVisible, setIsModalSetTimeVisible] = useState<boolean>(false);
    const refLottieVew = useRef<LottieView>();
    useEffect(() => {
        clearSounds();
        addSound({
            name,
            volume: 1,
        });
    }, []);
    const playSoundHandle = () => {
        if (isPlaying) {
            pauseAudio();
            refLottieVew.current?.play();
        } else {
            playAudio();
            refLottieVew.current?.pause();
        }
    };
    const goToSettingTime = () => {
        setIsModalSetTimeVisible(true);
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image key={'blurryImage'} source={{ uri: image_url }} style={styles.absolute} />
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={20}
                reducedTransparencyFallbackColor="white"
            />
            <View>
                <View>
                    <LottieView
                        ref={refLottieVew as MutableRefObject<LottieView>}
                        style={styles.lottieView}
                        source={require('assets/lottie/circle-waves.json')}
                        autoPlay={true}
                        loop={true}
                    />
                    <Pressable style={styles.timmerView} onPress={goToSettingTime}>
                        <Text style={styles.timmer}>Timer</Text>
                    </Pressable>
                </View>
                <ListSounds sounds={sounds} />
            </View>

            <TouchableOpacity style={styles.buttonPlay} onPress={playSoundHandle}>
                <Text style={styles.buttonTitle}>{!isPlaying ? 'Pause' : 'Play'}</Text>
            </TouchableOpacity>
            <ModalSetTime isModalVisible={isModalSetTimeVisible} setIsModalVisible={setIsModalSetTimeVisible} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    buttonPlay: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        width: 150,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fffF',
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    lottieView: {
        width: width / 1.2,
        height: width / 1.2,
        marginTop: 10,
    },
    timmerView: {
        position: 'absolute',
        top: (width / 1.2 - 30) / 2,
        left: width / 2 - 95,
        padding: 40,
    },
    timmer: {
        width: 200,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
export default SoundScreen;
