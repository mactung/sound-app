import React, { FC, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from 'styles/global.style';

const NOTE_ICONS = ['musical-note', 'musical-notes', 'musical-note-outline', 'musical-notes-outline'];

interface NoteProps {
    active: boolean;
    index: number;
    left: number;
    duration: number;
    delay: number;
    size: number;
}

const Note: FC<NoteProps> = ({ active, index, left, duration, delay, size }) => {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let cancelled = false;
        const run = () => {
            progress.setValue(0);
            Animated.timing(progress, {
                toValue: 1,
                duration,
                delay,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished && !cancelled && active) {
                    run();
                }
            });
        };
        if (active) {
            run();
        } else {
            progress.stopAnimation();
            progress.setValue(0);
        }
        return () => {
            cancelled = true;
            progress.stopAnimation();
        };
    }, [active, progress, duration, delay]);

    const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, -190] });
    const translateX = progress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, index % 2 === 0 ? 16 : -16, 0],
    });
    const opacity = progress.interpolate({
        inputRange: [0, 0.15, 0.75, 1],
        outputRange: [0, 0.9, 0.9, 0],
    });
    const scale = progress.interpolate({ inputRange: [0, 0.4, 1], outputRange: [0.6, 1, 0.8] });

    return (
        <Animated.View
            style={[styles.note, { left, opacity, transform: [{ translateY }, { translateX }, { scale }] }]}
            pointerEvents="none">
            <Icon
                name={NOTE_ICONS[index % NOTE_ICONS.length]}
                type="ionicon"
                size={size}
                color={index % 3 === 0 ? Colors.accent : Colors.white}
            />
        </Animated.View>
    );
};

const NOTES = [
    { left: 10, duration: 4200, delay: 0, size: 20 },
    { left: 60, duration: 5200, delay: 800, size: 16 },
    { left: 110, duration: 4600, delay: 1600, size: 24 },
    { left: 150, duration: 5000, delay: 400, size: 18 },
    { left: 200, duration: 4400, delay: 1200, size: 22 },
    { left: 240, duration: 5400, delay: 2000, size: 16 },
];

const FloatingNotes: FC<{ active: boolean }> = ({ active }) => {
    return (
        <View style={styles.container} pointerEvents="none">
            {NOTES.map((n, i) => (
                <Note key={i} active={active} index={i} {...n} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 240,
        alignItems: 'center',
    },
    note: {
        position: 'absolute',
        bottom: 0,
    },
});

export default FloatingNotes;
