import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigationService from 'navigation/NavigationSerivce';
import { Colors, Radius, Spacing } from 'styles/global.style';

const HeroCard = () => {
    return (
        <Pressable style={styles.wrapper} onPress={() => NavigationService.navigate('SoundScreen')}>
            <ImageBackground
                source={require('assets/images/header.jpg')}
                style={styles.image}
                imageStyle={styles.imageInner}>
                <View style={styles.overlay} />
                <View style={styles.badge}>
                    <Icon name="sparkles" type="ionicon" size={13} color={Colors.onAccent} />
                    <Text style={styles.badgeText}>FEATURED</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Quick Relax</Text>
                        <Text style={styles.subtitle}>Forest & ocean ambience</Text>
                    </View>
                    <View style={styles.playFab}>
                        <Icon name="play" type="ionicon" size={26} color={Colors.onAccent} />
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: Spacing.md,
        borderRadius: Radius.lg,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 14,
        elevation: 8,
    },
    image: {
        height: 220,
        justifyContent: 'space-between',
    },
    imageInner: {
        borderRadius: Radius.lg,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(20, 22, 48, 0.28)',
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.accent,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: Radius.pill,
        margin: Spacing.sm,
    },
    badgeText: {
        color: Colors.onAccent,
        fontWeight: '800',
        fontSize: 10,
        letterSpacing: 1,
        marginLeft: 4,
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.md,
    },
    title: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: '800',
    },
    subtitle: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 13,
        marginTop: 2,
    },
    playFab: {
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        elevation: 6,
    },
});

export default HeroCard;
