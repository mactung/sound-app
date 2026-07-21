import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import CurrentMixFloat from 'components/CurrenMixFloat';
import { Colors } from 'styles/global.style';
// import PlayList from './components/PlayList';
import CreateYourMix from './components/CreateYourMix';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const { sounds, music } = useSelector((state: any) => state.player);
    return (
        <View style={styles.root}>
            <ScrollView style={styles.container} bounces={false}>
                <Image style={styles.imageHeader} source={require('assets/images/header.jpg')} />
                {/* <PlayList title="Recently Play" /> */}
                <CreateYourMix />
                {/* <PlayList title="My Mix" /> */}
            </ScrollView>
            {(sounds.length > 0 || music) && <CurrentMixFloat />}
        </View>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        backgroundColor: Colors.background,
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
