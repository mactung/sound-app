import React, { FC, useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from 'styles/global.style';

const { width } = Dimensions.get('window');
const DISC = Math.min(width * 0.62, 260);

const VinylDisc: FC<{ spinning: boolean }> = ({ spinning }) => {
    const spin = useRef(new Animated.Value(0)).current;
    const loopRef = useRef<Animated.CompositeAnimation | null>(null);

    useEffect(() => {
        if (spinning) {
            loopRef.current = Animated.loop(
                Animated.timing(spin, {
                    toValue: 1,
                    duration: 14000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            );
            loopRef.current.start();
        } else {
            loopRef.current?.stop();
            spin.stopAnimation();
        }
        return () => {
            loopRef.current?.stop();
        };
    }, [spinning, spin]);

    const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

    return (
        <View style={styles.wrapper}>
            <Animated.View style={[styles.disc, { transform: [{ rotate }] }]}>
                <View style={styles.groove1} />
                <View style={styles.groove2} />
                <View style={styles.groove3} />
                <View style={styles.label}>
                    <Icon name="musical-notes" type="ionicon" size={34} color={Colors.primary} />
                </View>
                <View style={styles.hole} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    disc: {
        width: DISC,
        height: DISC,
        borderRadius: DISC / 2,
        backgroundColor: '#12162E',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(137, 194, 217, 0.25)',
        shadowColor: Colors.accent,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 24,
        elevation: 10,
    },
    groove1: {
        position: 'absolute',
        width: DISC * 0.82,
        height: DISC * 0.82,
        borderRadius: DISC,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    groove2: {
        position: 'absolute',
        width: DISC * 0.64,
        height: DISC * 0.64,
        borderRadius: DISC,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    groove3: {
        position: 'absolute',
        width: DISC * 0.46,
        height: DISC * 0.46,
        borderRadius: DISC,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    label: {
        width: DISC * 0.34,
        height: DISC * 0.34,
        borderRadius: DISC,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hole: {
        position: 'absolute',
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.sheet,
    },
});

export default VinylDisc;
