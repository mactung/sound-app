import NavigationService from 'navigation/NavigationSerivce';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SoundIcon = ({ item }: any) => {
    const goToCustomSoundScreen = () => {
        NavigationService.navigate('CustomScreen');
    };
    return (
        <TouchableOpacity style={styles.container} onPress={goToCustomSoundScreen}>
            {item === 'addItem' ? <Text>Add</Text> : <Text>{item.name}</Text>}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
});
export default SoundIcon;
