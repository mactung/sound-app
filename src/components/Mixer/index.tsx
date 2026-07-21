import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Colors, Radius, Spacing } from 'styles/global.style';
import Player from '../Player';
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
                    <View style={styles.heroArt}>
                        <Icon name="disc" type="ionicon" size={54} color={Colors.onAccent} />
                    </View>
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
        width: 96,
        height: 96,
        borderRadius: 28,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 18,
        elevation: 10,
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
