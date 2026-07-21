import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ArtThumb from 'components/ArtThumb';
import Waveform from 'components/Waveform';
import useMixLibrary from 'hooks/useMixLibrary';
import { Colors, Radius, Spacing } from 'styles/global.style';

// A single tap-to-play signature card at the top of Home.
const FEATURED = {
    title: 'Deep Sleep',
    subtitle: 'Forest • Ocean • Rain',
    sounds: [
        { _id: 5, name: 'Forest', file_name: 'forest.mp3', type: 'sound', volume: 0.9 },
        { _id: 6, name: 'Ocean Waves', file_name: 'ocean_waves.mp3', type: 'sound', volume: 0.7 },
        { _id: 24, name: 'Rain', file_name: 'light_rain.mp3', type: 'sound', volume: 0.6 },
    ],
};

const FeaturedHero = () => {
    const { loadMix } = useMixLibrary();
    const play = () =>
        loadMix({ _id: 0, name: FEATURED.title, created_at: 0 as any, sounds: FEATURED.sounds, music: null });

    return (
        <Pressable onPress={play} style={styles.wrap}>
            <ArtThumb index={2} radius={Radius.lg} style={styles.art}>
                <View style={styles.overlay} />
                <View style={styles.content}>
                    <View style={styles.tag}>
                        <Icon name="moon" type="ionicon" size={12} color={Colors.onAccent} />
                        <Text style={styles.tagText}>TONIGHT'S MIX</Text>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.info}>
                            <Text style={styles.title}>{FEATURED.title}</Text>
                            <Text style={styles.subtitle}>{FEATURED.subtitle}</Text>
                            <View style={styles.wave}>
                                <Waveform bars={30} progress={0.4} height={22} />
                            </View>
                        </View>
                        <View style={styles.playFab}>
                            <Icon name="play" type="ionicon" size={28} color={Colors.accent} iconStyle={styles.playIcon} />
                        </View>
                    </View>
                </View>
            </ArtThumb>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    wrap: {
        marginHorizontal: Spacing.md,
        marginBottom: Spacing.lg,
        borderRadius: Radius.lg,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 18,
        elevation: 10,
    },
    art: {
        height: 200,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(10,6,25,0.18)',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        padding: Spacing.md,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.28)',
        borderRadius: Radius.pill,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    tagText: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 1,
        marginLeft: 5,
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    info: {
        flex: 1,
    },
    title: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: '800',
    },
    subtitle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        marginTop: 2,
        fontWeight: '600',
    },
    wave: {
        marginTop: 12,
        marginRight: 16,
    },
    playFab: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    playIcon: {
        marginLeft: 3,
    },
});

export default FeaturedHero;
