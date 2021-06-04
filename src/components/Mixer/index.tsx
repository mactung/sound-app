import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { Colors } from 'styles/global.style';
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
    return (
        <Modal
            isVisible={isModalVisible}
            style={styles.container}
            backdropColor={Colors.background}
            backdropOpacity={0.98}>
            <HeaderMixer setIsModalVisible={setIsModalVisible} sounds={sounds} music={music} />
            <Music music={music} setIsModalVisible={setIsModalVisible} />
            <ListSounds sounds={sounds} setIsModalVisible={setIsModalVisible} />
            <Player isPlaying={isPlaying} />
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
        paddingTop: 50,
    },
    textTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 40,
    },
    backdrop: {
        height: '100%',
        width: '100%',
    },
});
export default Mixer;
