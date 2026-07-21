import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import CurrentMixFloat from 'components/CurrenMixFloat';
import AppBackground from 'components/AppBackground';
import NavigationService from 'navigation/NavigationSerivce';
import HeroCard from './components/HeroCard';
import QuickActions from './components/QuickActions';
import FeaturedSounds from './components/FeaturedSounds';
import MyMixList from './components/MyMixList';
import { useSelector } from 'react-redux';
import { Colors, Spacing } from 'styles/global.style';

const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) {
        return 'Good morning';
    }
    if (h < 18) {
        return 'Good afternoon';
    }
    return 'Good evening';
};

const HomeScreen = () => {
    const { sounds, music } = useSelector((state: any) => state.player);
    return (
        <AppBackground>
            <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
                    <View style={styles.headerRow}>
                        <View>
                            <Text style={styles.greeting}>{greeting()}</Text>
                            <Text style={styles.tagline}>Find your calm</Text>
                        </View>
                        <Icon
                            name="settings-outline"
                            type="ionicon"
                            size={24}
                            color={Colors.white}
                            onPress={() => NavigationService.navigate('BottomTabs', { screen: 'SettingsScreen' })}
                        />
                    </View>

                    <HeroCard />
                    <QuickActions />
                    <MyMixList />
                    <FeaturedSounds />
                </ScrollView>
            </SafeAreaView>
            {(sounds.length > 0 || music) && <CurrentMixFloat />}
        </AppBackground>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    content: {
        paddingBottom: 120,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.sm,
        paddingBottom: Spacing.md,
    },
    greeting: {
        color: Colors.white,
        fontSize: 26,
        fontWeight: '800',
    },
    tagline: {
        color: Colors.textMuted,
        fontSize: 14,
        marginTop: 2,
    },
});

export default HomeScreen;
