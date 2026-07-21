import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, ModalAnim, Radius, Spacing } from 'styles/global.style';
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
        <Modal
            isVisible={isModalVisible}
            style={styles.container}
            backdropColor={Colors.primary}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={ModalAnim.animationInTiming}
            animationOutTiming={ModalAnim.animationOutTiming}
            backdropTransitionInTiming={ModalAnim.backdropTransitionInTiming}
            backdropTransitionOutTiming={ModalAnim.backdropTransitionOutTiming}
            useNativeDriverForBackdrop
            hideModalContentWhileAnimating
            swipeDirection={['down']}
            propagateSwipe
            onSwipeComplete={() => setIsModalVisible(false)}
            onBackdropPress={() => setIsModalVisible(false)}>
            <SafeAreaView style={styles.sheet} edges={['top', 'bottom']}>
                <View style={styles.handle} />
                <Text style={styles.title}>Credits</Text>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    {copyrights.map((copyright, key) => (
                        <Text style={styles.copyrightContent} key={key}>
                            {copyright}
                        </Text>
                    ))}
                </ScrollView>
                <Button
                    onPress={() => setIsModalVisible(false)}
                    title="Close"
                    buttonStyle={styles.closeButton}
                    titleStyle={styles.closeTitle}
                />
            </SafeAreaView>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
    },
    sheet: {
        flex: 1,
        marginTop: 60,
        backgroundColor: Colors.sheet,
        borderTopLeftRadius: Radius.lg,
        borderTopRightRadius: Radius.lg,
        paddingHorizontal: Spacing.md,
        paddingTop: 10,
    },
    handle: {
        alignSelf: 'center',
        width: 44,
        height: 5,
        borderRadius: Radius.pill,
        backgroundColor: Colors.textMuted,
        opacity: 0.6,
        marginBottom: 12,
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: Spacing.md,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: Spacing.md,
    },
    copyrightContent: {
        textAlign: 'center',
        marginBottom: 18,
        color: Colors.textMuted,
        fontSize: 12,
        lineHeight: 18,
    },
    closeButton: {
        backgroundColor: Colors.accent,
        borderRadius: Radius.pill,
        marginVertical: Spacing.sm,
        paddingVertical: 12,
    },
    closeTitle: {
        color: Colors.onAccent,
        fontWeight: '700',
    },
});
export default Description;
