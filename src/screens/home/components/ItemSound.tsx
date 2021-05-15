import NavigationService from 'navigation/NavigationSerivce';
import React, { FC } from 'react';
import { StyleSheet, Text, Dimensions, Image, Pressable } from 'react-native';
interface Iprops {
    title: string;
    _id: number;
    image_url: string;
    sound_path: string;
}
const { width } = Dimensions.get('screen');
const ItemSound: FC<Iprops> = ({ title, image_url, sound_path }) => {
    const goToSoundScreen = () => {
        NavigationService.navigate('SoundScreen', { sound_path, image_url, name: title });
    };
    return (
        <Pressable onPress={goToSoundScreen} style={styles.container}>
            <Image
                style={styles.imageView}
                source={image_url ? { uri: image_url } : require('assets/images/image_large.png')}
            />
            <Text style={styles.titleText}>{title}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 30,
    },
    imageView: {
        width: (width - 60) / 3,
        height: (width - 60) / 3,
        marginBottom: 10,
    },
    titleText: { fontWeight: 'bold' },
});
export default ItemSound;
