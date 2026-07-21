import usePlayer from 'hooks/usePlayer';
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors, Radius } from 'styles/global.style';
interface Iprops {
    isPlaying: boolean;
}
const Player: FC<Iprops> = ({ isPlaying }) => {
    const { pausePlayer, playPlayer } = usePlayer();
    const [isSave, setIsSave] = useState<boolean>(false);
    const saveMix = () => {
        setIsSave(!isSave);
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
                color={isSave ? Colors.accent : Colors.textMuted}
                onPress={saveMix}
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
