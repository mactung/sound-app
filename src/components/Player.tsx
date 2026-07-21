import usePlayer from 'hooks/usePlayer';
import useMixLibrary from 'hooks/useMixLibrary';
import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Colors, Radius, Spacing } from 'styles/global.style';
import Waveform from './Waveform';
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
        if (canSave) {
            setShowSaveModal(true);
        }
    };
    const onSave = (name: string) => {
        saveMix(name, sounds, music);
        setShowSaveModal(false);
        setIsSave(true);
    };

    return (
        <View style={styles.container}>
            <Waveform progress={isPlaying ? 0.6 : 0.15} />
            <View style={styles.controls}>
                <TouchableOpacity style={styles.side} onPress={onHeart}>
                    <Icon
                        name={isSave ? 'heart' : 'heart-outline'}
                        type="ionicon"
                        size={24}
                        color={isSave ? Colors.accent : canSave ? Colors.textMuted : 'rgba(169,155,199,0.4)'}
                    />
                </TouchableOpacity>

                <View style={styles.side} />

                <TouchableOpacity
                    style={styles.playButton}
                    activeOpacity={0.85}
                    onPress={isPlaying ? pausePlayer : playPlayer}>
                    <Icon
                        name={isPlaying ? 'pause' : 'play'}
                        type="ionicon"
                        size={34}
                        color={Colors.onAccent}
                        iconStyle={!isPlaying ? { marginLeft: 3 } : undefined}
                    />
                </TouchableOpacity>

                <View style={styles.side} />

                <TouchableOpacity style={styles.side}>
                    <Icon name="timer-outline" type="ionicon" size={24} color={Colors.textMuted} />
                </TouchableOpacity>
            </View>

            <ModalSaveMix isVisible={showSaveModal} onClose={() => setShowSaveModal(false)} onSave={onSave} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.md,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Spacing.md,
    },
    side: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButton: {
        width: 76,
        height: 76,
        borderRadius: 38,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 18,
        elevation: 10,
    },
});
export default Player;
