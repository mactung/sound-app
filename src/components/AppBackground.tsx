import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Defs, LinearGradient, RadialGradient, Rect, Stop } from 'react-native-svg';
import { BackgroundGradient, Colors } from 'styles/global.style';

interface Props {
    children?: ReactNode;
}

/**
 * Full-screen gradient backdrop (no image assets) with two gentle effects:
 *  - soft radial glows + a slow "breathing" color tint (calming ambience)
 *  - a fade + rise entrance for the screen content (feels light on enter)
 */
const AppBackground: FC<Props> = ({ children }) => {
    const { width, height } = useWindowDimensions();
    const breathe = useRef(new Animated.Value(0)).current;
    const enter = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(enter, {
            toValue: 1,
            duration: 850,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start();

        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(breathe, {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(breathe, {
                    toValue: 0,
                    duration: 5000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        );
        loop.start();
        return () => loop.stop();
    }, [breathe, enter]);

    const tintOpacity = breathe.interpolate({ inputRange: [0, 1], outputRange: [0, 0.06] });
    const contentTranslate = enter.interpolate({ inputRange: [0, 1], outputRange: [14, 0] });

    return (
        <View style={styles.root}>
            <Svg style={StyleSheet.absoluteFill} width={width} height={height} pointerEvents="none">
                <Defs>
                    <LinearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                        <Stop offset="0" stopColor={BackgroundGradient[0]} />
                        <Stop offset="0.55" stopColor={BackgroundGradient[1]} />
                        <Stop offset="1" stopColor={BackgroundGradient[2]} />
                    </LinearGradient>
                    <RadialGradient id="glowTop" cx="80%" cy="8%" r="60%">
                        <Stop offset="0" stopColor={Colors.accent} stopOpacity="0.28" />
                        <Stop offset="1" stopColor={Colors.accent} stopOpacity="0" />
                    </RadialGradient>
                    <RadialGradient id="glowBottom" cx="12%" cy="98%" r="65%">
                        <Stop offset="0" stopColor={Colors.accent2} stopOpacity="0.22" />
                        <Stop offset="1" stopColor={Colors.accent2} stopOpacity="0" />
                    </RadialGradient>
                </Defs>
                <Rect x="0" y="0" width={width} height={height} fill="url(#bg)" />
                <Rect x="0" y="0" width={width} height={height} fill="url(#glowTop)" />
                <Rect x="0" y="0" width={width} height={height} fill="url(#glowBottom)" />
            </Svg>

            {/* gentle breathing color tint */}
            <Animated.View
                pointerEvents="none"
                style={[StyleSheet.absoluteFill, { backgroundColor: Colors.accent, opacity: tintOpacity }]}
            />

            <Animated.View style={[styles.content, { opacity: enter, transform: [{ translateY: contentTranslate }] }]}>
                {children}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: BackgroundGradient[1],
    },
    content: {
        flex: 1,
    },
});

export default AppBackground;
