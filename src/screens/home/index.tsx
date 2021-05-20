import CurrentMixFloat from 'components/CurrenMixFloat';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'styles/global.style';
import AudioContext from 'contexts/AudioContext';
import PlayList from './components/PlayList';
import CreateYourMix from './components/CreateYourMix';
const HomeScreen = () => {
    const { sounds }: any = useContext(AudioContext);
    return (
        <ScrollView style={styles.container}>
            {/* <Image style={styles.imageHeader} source={require('assets/images/image_large.png')} /> */}
            <SafeAreaView>
                <PlayList title="Recently Play" />
                <CreateYourMix />
                <PlayList title="My Mix" />
                {sounds.length > 0 && <CurrentMixFloat />}
            </SafeAreaView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    imageHeader: {
        height: 300,
        width: '100%',
    },
    flatListCotainer: { justifyContent: 'space-between' },
});
export default HomeScreen;
