import NavigationService from 'navigation/NavigationSerivce';
import React, { FC } from 'react';
import { StyleSheet, Text, Dimensions, Pressable, ImageBackground } from 'react-native';
import { Colors } from 'styles/global.style';
interface Iprops {
    item: any;
}
const { width } = Dimensions.get('screen');
const ItemMix: FC<Iprops> = ({ item }) => {
    const goToSoundScreen = () => {
        NavigationService.navigate('SoundScreen', {
            sound_path: item.sound_path,
            image_url: item.image_url,
            name: item.title,
        });
    };
    return (
        <Pressable onPress={goToSoundScreen} style={styles.container}>
            <ImageBackground
                imageStyle={styles.image}
                style={styles.imageView}
                source={item.image_url ? { uri: item.image_url } : require('assets/images/mix_bg.jpg')}>
                <Text style={styles.titleText}>{item.title}</Text>
                {item.time && <Text style={styles.timeText}>{Math.ceil(item.time / 60) + ' min'} </Text>}
            </ImageBackground>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 30,
        marginLeft: 20,
    },
    imageView: {
        width: (width - 40) / 2,
        height: (width - 40) / 2,
        resizeMode: 'cover',
        padding: 15,
        justifyContent: 'flex-end',
    },
    image: {
        borderRadius: 20,
    },
    titleText: { fontWeight: 'bold', fontSize: 18, color: Colors.white },
    timeText: {
        color: Colors.white,
    },
});
export default ItemMix;
