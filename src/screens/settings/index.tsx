import React, { useState } from 'react';
import { View, Alert, Linking, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Description from './components/Description';
const urlPolicy = 'https://aienglish.megaads.vn/privacy-policy';
const SettingsScreen = () => {
    const [isShowDescription, setIsShowDescription] = useState<boolean>(false);
    const handlePress = async (url: string) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <ListItem onPress={() => handlePress(urlPolicy)}>
                <ListItem.Content>
                    <ListItem.Title>Privacy Policy</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem onPress={() => setIsShowDescription(true)}>
                <ListItem.Content>
                    <ListItem.Title>Description</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <Description isModalVisible={isShowDescription} setIsModalVisible={setIsShowDescription} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});
export default SettingsScreen;
