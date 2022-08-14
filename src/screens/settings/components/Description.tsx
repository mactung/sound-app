import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { StyleSheet, ScrollView, Text } from 'react-native';
interface IProps {
    isModalVisible: boolean;
    setIsModalVisible: (value: boolean) => void;
}
const copyrights = [
    ` Calm and Peaceful by LesFM | https://lesfm.net/relaxing-background-music/
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 3.0
    https://creativecommons.org/licenses/by/3.0/
    `,
    ` Spring Flowers by Keys of Moon | https://soundcloud.com/keysofmoon
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 4.0
    https://creativecommons.org/licenses/by/4.0/
    `,
    ` Autumn Scene by Keys of Moon | https://soundcloud.com/keysofmoon
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 4.0
    https://creativecommons.org/licenses/by/4.0/
    `,
    ` Sunset Landscape by Keys of Moon | https://soundcloud.com/keysofmoon
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 4.0
    https://creativecommons.org/licenses/by/4.0/
    `,
    ` Somewhere in the Clouds by Keys of Moon | https://soundcloud.com/keysofmoon
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 4.0
    https://creativecommons.org/licenses/by/4.0/
    `,
    `Glimpse of Eternity by Meydän | https://linktr.ee/meydan
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 4.0
    https://creativecommons.org/licenses/by/4.0/
    `,
];
const Description: FC<IProps> = ({ isModalVisible, setIsModalVisible }) => {
    return (
        <Modal isVisible={isModalVisible} backdropOpacity={0.95} style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {copyrights.map((copyright, key) => (
                    <Text style={styles.copyrightContent} key={key}>
                        {copyright}
                    </Text>
                ))}
            </ScrollView>
            <Button onPress={() => setIsModalVisible(false)} title="Close" />
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    scrollView: {
        height: '100%',
        flex: 1,
        color: '#000',
    },
    copyrightContent: {
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 30,
    },
    buttonClose: {
        backgroundColor: 'transparent',
    },
});
export default Description;
