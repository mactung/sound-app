import CurrentMixFloat from 'components/CurrenMixFloat';
import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'styles/global.style';
import AudioContext from 'contexts/AudioContext';
import PlayList from './components/PlayList';
const HomeScreen = () => {
    const { sounds }: any = useContext(AudioContext);
    return (
        <>
            <Image style={styles.imageHeader} source={require('assets/images/image_large.png')} />
            <SafeAreaView style={styles.container}>
                <PlayList title="Recently Play" />
                <PlayList title="My Mix" />
                {sounds.length > 0 && <CurrentMixFloat />}
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    imageHeader: {
        height: 300,
        width: '100%',
    },
    flatListCotainer: { justifyContent: 'space-between' },
});
export default HomeScreen;
