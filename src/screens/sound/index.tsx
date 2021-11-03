import React, { MutableRefObject, useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
import ListSounds from './components/ListSounds';
import ModalSetTime from 'components/ModalSetTime';
import { useDispatch, useSelector } from 'react-redux';
import { clearSounds, addSound } from 'store/player';
const { width } = Dimensions.get('screen');
import Sound from 'react-native-sound';
import usePlayer from 'hooks/usePlayer';

// Enable playback in silence mode
// Sound.setCategory('Ambient', true);

const SoundScreen = ({ route }: any) => {
    const dispatch = useDispatch();
    const { image_url } = route.params;
    const { isPlaying, sounds } = useSelector((state: any) => state.player);
    const { playPlayer } = usePlayer();
    const [isModalSetTimeVisible, setIsModalSetTimeVisible] = useState<boolean>(false);
    const refLottieVew = useRef<LottieView>();
    useEffect(() => {
        clearSounds();
        const forest = new Sound('forest.mp3', Sound.MAIN_BUNDLE, error => {
            forest.play();
            dispatch(
                addSound({
                    name: 'forest',
                    sound: forest,
                }),
            );
        });
        const ocean = new Sound('ocean.mp3', Sound.MAIN_BUNDLE, error => {
            ocean.play();
            dispatch(
                addSound({
                    name: 'ocean',
                    sound: ocean,
                }),
            );
        });
    }, []);
    const playSoundHandle = () => {
        if (isPlaying) {
            pausePlayer();
            refLottieVew.current?.play();
        } else {
            playPlayer();
            refLottieVew.current?.pause();
        }
    };
    const goToSettingTime = () => {
        setIsModalSetTimeVisible(true);
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image
                key={'blurryImage'}
                source={image_url ? { uri: image_url } : require('assets/images/mix_bg.jpg')}
                style={styles.absolute}
            />
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
                <Text style={styles.buttonTitle}>{isPlaying ? 'Pause' : 'Play'}</Text>
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
