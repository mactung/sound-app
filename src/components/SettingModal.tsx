import React, { FC } from 'react';
import { StyleSheet, Alert, Linking } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from 'styles/global.style';
import { ListItem } from 'react-native-elements';
interface Iprops {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}
const list = [
    {
        name: 'Privacy Policy',
        url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
];
const SettingModal: FC<Iprops> = ({ isModalVisible, setIsModalVisible }) => {
    const closeModal = () => {
        setIsModalVisible(false);
    };
    const handlePress = async (url: string) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };
    return (
        <Modal
            isVisible={isModalVisible}
            style={styles.container}
            backdropColor={Colors.primary}
            backdropOpacity={0.95}
            onBackdropPress={closeModal}
            onBackButtonPress={closeModal}>
            {list.map((l, i) => (
                <ListItem key={i} onPress={() => handlePress(l.url)}>
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
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
export default SettingModal;
