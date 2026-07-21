import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import CurrentMixFloat from 'components/CurrenMixFloat';
import AppBackground from 'components/AppBackground';
import { Icon } from 'react-native-elements';
import NavigationService from 'navigation/NavigationSerivce';
import CreateYourMix from './components/CreateYourMix';
import MyMixList from './components/MyMixList';
import { useSelector } from 'react-redux';
import { Colors, Radius } from 'styles/global.style';

const HomeScreen = () => {
    const { sounds, music } = useSelector((state: any) => state.player);
    const goToQuickRelax = () => NavigationService.navigate('SoundScreen');
    return (
        <AppBackground>
            <ScrollView style={styles.container} bounces={false}>
                <Pressable onPress={goToQuickRelax}>
                    <Image style={styles.imageHeader} source={require('assets/images/header.jpg')} />
                    <View style={styles.heroTag}>
                        <Icon name="play" type="ionicon" size={16} color={Colors.primary} />
                        <Text style={styles.heroTagText}>Quick Relax</Text>
                    </View>
                </Pressable>
                <CreateYourMix />
                <MyMixList />
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
    heroTag: {
        position: 'absolute',
        bottom: 46,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.accent,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: Radius.pill,
    },
    heroTagText: {
        color: Colors.primary,
        fontWeight: '700',
        marginLeft: 6,
    },
    flatListCotainer: { justifyContent: 'space-between' },
});
export default HomeScreen;
