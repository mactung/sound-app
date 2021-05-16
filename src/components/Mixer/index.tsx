import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Player from '../Player';
import HeaderMixer from './components/HeaderMixer';
import ListSounds from './components/ListSounds';
interface Iprops {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}
const Mixer: FC<Iprops> = ({ isModalVisible, setIsModalVisible }) => {
    return (
        <Modal isVisible={isModalVisible} backdropColor="white" backdropOpacity={1}>
            <SafeAreaView style={styles.container}>
                <HeaderMixer setIsModalVisible={setIsModalVisible} />
                <ListSounds />
                <Player />
            </SafeAreaView>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
