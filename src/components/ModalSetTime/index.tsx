import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements/dist/image/Image';
import ItemSetTime from './ItemSetTime';
interface Iprops {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}
const ModalSetTime: FC<Iprops> = ({ isModalVisible, setIsModalVisible }) => {
    const data = [
        {
            name: 'Unlimited',
            value: 'unlimited',
        },
        {
            name: '10 minutes',
            value: '10m',
        },
        {
            name: '15 minutes',
            id: '15m',
        },
        {
            name: '20 minutes',
            id: '20m',
        },
        {
            name: '30 minutes',
            id: '30m',
        },
        {
            name: '40 minutes',
            id: '40m',
        },
        {
            name: '50 minutes',
            id: '40m',
        },
        {
            name: '1 hour',
            id: '1h',
        },
    ];
    const renderItem = ({ item }: any) => <ItemSetTime item={item} />;
    return (
        <Modal
            isVisible={isModalVisible}
            backdropColor="black"
            backdropOpacity={1}
            customBackdrop={<Image style={styles.backdrop} source={require('assets/images/set_time_bg.jpeg')} />}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.textTitle}>Set Timer</Text>
                <View>
                    <FlatList data={data} renderItem={renderItem} />
                </View>
                <Button title="Close" onPress={() => setIsModalVisible(false)} />
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
export default ModalSetTime;
