import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

// Curated vibrant gradient pairs (rich, colorful — like the reference artwork).
export const ART_GRADIENTS: [string, string][] = [
    ['#7C3AED', '#DB2777'],
    ['#4F46E5', '#06B6D4'],
    ['#8B5CF6', '#EC4899'],
    ['#0EA5E9', '#6366F1'],
    ['#F43F5E', '#8B5CF6'],
    ['#10B981', '#3B82F6'],
    ['#F59E0B', '#EF4444'],
    ['#6366F1', '#A855F7'],
    ['#22D3EE', '#818CF8'],
];

interface Props {
    index?: number;
    radius?: number;
    style?: any;
    children?: React.ReactNode;
}

// A rounded gradient "artwork" tile with soft light blobs for depth.
const ArtThumb: FC<Props> = ({ index = 0, radius = 20, style, children }) => {
    const [c1, c2] = ART_GRADIENTS[index % ART_GRADIENTS.length];
    const id = `g${index % ART_GRADIENTS.length}`;
    return (
        <View style={[styles.wrap, { borderRadius: radius }, style]}>
            <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
                <Defs>
                    <LinearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                        <Stop offset="0" stopColor={c1} />
                        <Stop offset="1" stopColor={c2} />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`} />
                <Circle cx="82%" cy="20%" r="34" fill="#FFFFFF" opacity={0.16} />
                <Circle cx="20%" cy="88%" r="46" fill="#FFFFFF" opacity={0.08} />
                <Circle cx="60%" cy="55%" r="70" fill="#000000" opacity={0.06} />
            </Svg>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ArtThumb;
