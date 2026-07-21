import usePlayer from 'hooks/usePlayer';
import useMixLibrary from 'hooks/useMixLibrary';
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Colors, Radius } from 'styles/global.style';
import ModalSaveMix from './ModalSaveMix';
interface Iprops {
    isPlaying: boolean;
}
const Player: FC<Iprops> = ({ isPlaying }) => {
    const { pausePlayer, playPlayer } = usePlayer();
    const { saveMix } = useMixLibrary();
    const { sounds, music } = useSelector((state: any) => state.player);
    const [isSave, setIsSave] = useState<boolean>(false);
    const [showSaveModal, setShowSaveModal] = useState<boolean>(false);

    const canSave = sounds.length > 0 || !!music;

    const onHeart = () => {
        if (!canSave) {
            return;
        }
        setShowSaveModal(true);
    };
    const onSave = (name: string) => {
        saveMix(name, sounds, music);
        setShowSaveModal(false);
        setIsSave(true);
    };

    return (
        <View style={styles.container}>
            <Icon size={28} name="timer-outline" type="ionicon" color={Colors.textMuted} />
            <View style={styles.playButton}>
                <Icon
                    size={72}
                    name={isPlaying ? 'pause-circle' : 'play-circle'}
                    type="ionicon"
                    color={Colors.white}
                    onPress={isPlaying ? pausePlayer : playPlayer}
                />
            </View>

            <Icon
                size={28}
                name={isSave ? 'heart' : 'heart-outline'}
                type="ionicon"
                color={isSave ? Colors.accent : canSave ? Colors.textMuted : 'rgba(154,166,212,0.4)'}
                onPress={onHeart}
            />

            <ModalSaveMix
                isVisible={showSaveModal}
                onClose={() => setShowSaveModal(false)}
                onSave={onSave}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: Radius.lg,
        borderTopRightRadius: Radius.lg,
        backgroundColor: Colors.secondary,
        paddingVertical: 16,
    },
    playButton: {
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        elevation: 6,
    },
});
export default Player;
