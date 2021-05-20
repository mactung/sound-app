import NavigationService from 'navigation/NavigationSerivce';
import React, { FC } from 'react';
import { StyleSheet, Text, Dimensions, Pressable, ImageBackground } from 'react-native';
interface Iprops {
    title: string;
    _id: number;
    image_url: string;
    sound_path: string;
}
const { width } = Dimensions.get('screen');
const ItemMix: FC<Iprops> = ({ title, image_url, sound_path }) => {
    const goToSoundScreen = () => {
        NavigationService.navigate('SoundScreen', { sound_path, image_url, name: title });
    };
    return (
        <Pressable onPress={goToSoundScreen} style={styles.container}>
            <ImageBackground
                style={styles.imageView}
                source={image_url ? { uri: image_url } : require('assets/images/image_large.png')}>
                <Text style={styles.titleText}>{title}</Text>
            </ImageBackground>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: 10,
    },
    imageView: {
        width: (width - 60) / 2,
        height: (width - 60) / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    titleText: { fontWeight: 'bold' },
});
export default ItemMix;
