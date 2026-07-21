import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Colors, Radius } from 'styles/global.style';
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
});
export default Mixer;
