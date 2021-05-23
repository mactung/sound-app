import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CurrentMixFloat from 'components/CurrenMixFloat';
import { Colors } from 'styles/global.style';
import PlayList from './components/PlayList';
import CreateYourMix from './components/CreateYourMix';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const { sounds } = useSelector((state: any) => state.player);
    return (
        <View>
            <ScrollView style={styles.container}>
                <PlayList title="Recently Play" />
                <CreateYourMix />
                <PlayList title="My Mix" />
            </ScrollView>
            {sounds.length > 0 && <CurrentMixFloat />}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.background,
    },
    imageHeader: {
        height: 300,
        width: '100%',
    },
    flatListCotainer: { justifyContent: 'space-between' },
});
export default HomeScreen;
