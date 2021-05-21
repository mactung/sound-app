import NavigationService from 'navigation/NavigationSerivce';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from 'styles/global.style';
const { width } = Dimensions.get('screen');
const CreateYourMix = () => {
    const goToComposer = () => {
        NavigationService.navigate('ComposerScreen');
    };
    return (
        <>
            <Text style={styles.title}>Create Your Mix</Text>
            <ImageBackground
                style={styles.imageContainer}
                imageStyle={styles.imageView}
                source={require('assets/images/mix_bg.png')}>
                <Button
                    buttonStyle={styles.buttonView}
                    titleStyle={styles.buttonTitle}
                    title="Create"
                    onPress={goToComposer}
                />
            </ImageBackground>
        </>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        width: width / 1.1,
        height: width / 1.1,
        alignSelf: 'center',
        marginBottom: 20,
        padding: 20,
        justifyContent: 'flex-end',
    },
    imageView: {
        resizeMode: 'cover',
        padding: 15,
        backgroundColor: Colors.white,
        justifyContent: 'flex-end',
        borderRadius: 20,
    },
    title: { color: Colors.white, fontSize: 22, fontWeight: 'bold', marginBottom: 15, marginLeft: 20 },
    buttonView: { width: width / 1.3, alignSelf: 'center', backgroundColor: Colors.bright, borderRadius: 40 },
    buttonTitle: {},
});
export default CreateYourMix;
