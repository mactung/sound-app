import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { Colors, Radius } from 'styles/global.style';
import SoundItem from './SoundItem';
import { removeMusic } from 'store/player';
import NavigationService from 'navigation/NavigationSerivce';

const Music = ({ music, setIsModalVisible }: any) => {
    const dispatch = useDispatch();
    const removeSound = () => {
        dispatch(removeMusic());
    };

    const goToChooseMusic = () => {
        setIsModalVisible(false);
        NavigationService.navigate('ComposerScreen', { index: 1 });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                MUSIC <Text style={styles.textNunber}>({music ? 1 : 0}/1)</Text>
            </Text>
            {music ? (
                <SoundItem item={music} removeSound={removeSound} />
            ) : (
                <>
                    <Text style={styles.subText}>You don't have any music in this mix.</Text>
                    <Button
                        buttonStyle={styles.buttonView}
                        titleStyle={styles.buttonTitle}
                        title="Add Music"
                        onPress={goToChooseMusic}
                    />
                </>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.divider,
        paddingVertical: 18,
    },
    textTitle: {
        color: Colors.white,
        fontWeight: '600',
        fontSize: 13,
        letterSpacing: 1,
        marginBottom: 10,
    },
    text: {
        color: Colors.white,
        marginBottom: 20,
    },
    buttonView: {
        borderRadius: Radius.pill,
        backgroundColor: Colors.accent,
        width: 160,
        paddingVertical: 12,
    },
    buttonTitle: {
        color: Colors.primary,
        fontWeight: '700',
    },
    textNunber: {
        color: Colors.textMuted,
    },
    subText: {
        color: Colors.textMuted,
        marginBottom: 12,
    },
});
export default Music;
