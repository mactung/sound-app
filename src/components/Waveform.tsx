import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'styles/global.style';

interface Props {
    bars?: number;
    progress?: number; // 0..1 portion shown as "played" (accent)
    height?: number;
}

// Decorative waveform bar (ambient loops have no real seek position).
const Waveform: FC<Props> = ({ bars = 42, progress = 0.5, height = 34 }) => {
    const items = Array.from({ length: bars });
    return (
        <View style={[styles.row, { height }]}>
            {items.map((_, i) => {
                const h = 4 + Math.abs(Math.sin(i * 1.3) + Math.cos(i * 0.7)) * (height - 6) * 0.5;
                const played = i / bars <= progress;
                return (
                    <View
                        key={i}
                        style={[
                            styles.bar,
                            { height: Math.max(4, h), backgroundColor: played ? Colors.accent : 'rgba(255,255,255,0.18)' },
                        ]}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bar: {
        flex: 1,
        marginHorizontal: 1.2,
        borderRadius: 2,
    },
});

export default Waveform;
