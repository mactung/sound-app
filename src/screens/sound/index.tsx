import React, { MutableRefObject, useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
const { width } = Dimensions.get('screen');

const SoundScreen = ({ route }: any) => {
    const { sound_path, image_url } = route.params;
    const [isPlay, setIsPlay] = useState<boolean>();
    const refLottieVew = useRef<LottieView>();
    useEffect(() => {}, [sound_path]);
    const playSoundHandle = () => {
        setIsPlay(!isPlay);
        if (isPlay) {
            refLottieVew.current?.play();
        } else {
            refLottieVew.current?.pause();
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image key={'blurryImage'} source={{ uri: image_url }} style={styles.absolute} />
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={20}
                reducedTransparencyFallbackColor="black"
            />
            <View>
                <LottieView
                    ref={refLottieVew as MutableRefObject<LottieView>}
                    style={styles.lottieView}
                    source={require('assets/lottie/circle-waves.json')}
                    autoPlay={true}
                    loop={true}
                />
                <View>
                    
                </View>
            </View>

            <TouchableOpacity style={styles.buttonPlay} onPress={playSoundHandle}>
                <Text style={styles.buttonTitle}>{isPlay ? 'Pause' : 'Play'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-between', alignItems: 'center' },
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
});
export default SoundScreen;
