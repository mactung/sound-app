import React from 'react';
import { View, Alert, Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
const list = [
    {
        name: 'Privacy Policy',
        url: 'https://aienglish.megaads.vn/privacy-policy',
    },
    {
        name: 'Description',
    },
];
const SettingsScreen = () => {
    const handlePress = async (url: string) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };
    return (
        <View>
            {list.map((l, i) => (
                <ListItem key={i} onPress={l.url ? () => handlePress(l.url) : () => {}}>
                    <ListItem.Content>
                        <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    );
};
export default SettingsScreen;
