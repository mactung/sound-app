import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import CurrentMixFloat from 'components/CurrenMixFloat';
import AppBackground from 'components/AppBackground';
// import PlayList from './components/PlayList';
import CreateYourMix from './components/CreateYourMix';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const { sounds, music } = useSelector((state: any) => state.player);
    return (
        <AppBackground>
            <ScrollView style={styles.container} bounces={false}>
                <Image style={styles.imageHeader} source={require('assets/images/header.jpg')} />
                {/* <PlayList title="Recently Play" /> */}
                <CreateYourMix />
                {/* <PlayList title="My Mix" /> */}
            </ScrollView>
            {(sounds.length > 0 || music) && <CurrentMixFloat />}
        </AppBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
    },
    imageHeader: {
        height: 320,
        width: '100%',
        marginBottom: 30,
    },
    flatListCotainer: { justifyContent: 'space-between' },
});
export default HomeScreen;
