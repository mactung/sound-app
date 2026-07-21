import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Colors, Radius, Spacing } from 'styles/global.style';
import Player from '../Player';
import ArtThumb from '../ArtThumb';
import HeaderMixer from './components/HeaderMixer';
import ListSounds from './components/ListSounds';
import Music from './components/Music';

interface Iprops {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}
const Mixer: FC<Iprops> = ({ isModalVisible, setIsModalVisible }) => {
    const { sounds, isPlaying, music } = useSelector((state: any) => state.player);
    const insets = useSafeAreaInsets();
    const count = sounds.length + (music ? 1 : 0);
    return (
        <Modal
            isVisible={isModalVisible}
            style={styles.container}
            backdropColor={Colors.primary}
            backdropOpacity={0.9}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={400}
            animationOutTiming={320}
            backdropTransitionInTiming={400}
            backdropTransitionOutTiming={320}
            useNativeDriverForBackdrop
            hideModalContentWhileAnimating
            swipeDirection={['down']}
            propagateSwipe
            onSwipeComplete={() => setIsModalVisible(false)}
            onBackdropPress={() => setIsModalVisible(false)}>
            <View style={[styles.sheet, { paddingTop: insets.top + 8, paddingBottom: insets.bottom }]}>
                <View style={styles.handle} />
                <HeaderMixer setIsModalVisible={setIsModalVisible} sounds={sounds} music={music} />
                <View style={styles.hero}>
                    <ArtThumb index={2} radius={30} style={styles.heroArt}>
                        <View style={styles.heroGlass}>
                            <Icon name="musical-notes" type="ionicon" size={44} color={Colors.white} />
                        </View>
                    </ArtThumb>
                    <Text style={styles.heroTitle}>Your Mix</Text>
                    <Text style={styles.heroSub}>
                        {count} {count === 1 ? 'sound' : 'sounds'} {isPlaying ? 'playing' : 'paused'}
                    </Text>
                </View>
                <Music music={music} setIsModalVisible={setIsModalVisible} />
                <ListSounds sounds={sounds} setIsModalVisible={setIsModalVisible} />
                <Player isPlaying={isPlaying} />
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
    },
    sheet: {
        flex: 1,
        marginTop: 40,
        backgroundColor: Colors.sheet,
        borderTopLeftRadius: Radius.lg,
        borderTopRightRadius: Radius.lg,
        paddingHorizontal: 4,
    },
    handle: {
        alignSelf: 'center',
        width: 44,
        height: 5,
        borderRadius: Radius.pill,
        backgroundColor: Colors.textMuted,
        opacity: 0.6,
        marginBottom: 8,
    },
    hero: {
        alignItems: 'center',
        paddingVertical: Spacing.md,
    },
    heroArt: {
        width: 120,
        height: 120,
        marginBottom: 14,
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 20,
        elevation: 12,
    },
    heroGlass: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: 'rgba(255,255,255,0.18)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroTitle: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '800',
    },
    heroSub: {
        color: Colors.textMuted,
        fontSize: 13,
        marginTop: 2,
    },
});
export default Mixer;
