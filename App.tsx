// In App.js in a new project

import React, { useReducer } from 'react';
import Navigation from './src/navigation';
import { setCustomFlatList } from 'utils/customs/setCustomFlatList';
import { setCustomSectionList } from 'utils/customs/setCustomSectionList';
import { setCustomScrollView } from 'utils/customs/setCustomScrollView';
import AudioContext from 'contexts/AudioContext';
var Sound = require('react-native-sound');

const isPlayReducer = (state, actions) => {
    switch (actions.type) {
        case 'PLAY':
            return true;
        case 'PAUSE':
            return false;
        default:
            break;
    }
};
const soundsReducer = (state, actions) => {
    switch (actions.type) {
        case 'ADD':
            return [...state, actions.payload];
        case 'REMOVE':
            return state.filter(item => item.name !== actions.payload.name);
        case 'CLEAR':
            return [];
        default:
            break;
    }
};
function App() {
    const [isPlaying, dipatchIsPlaying] = useReducer(isPlayReducer, false);
    const [sounds, dispatchSounds] = useReducer(soundsReducer, []);
    const pauseAudio = () => {
        sounds.forEach(item => {
            item.sound.pause();
        });
        dipatchIsPlaying({ type: 'PAUSE' });
    };
    const playAudio = () => {
        sounds.forEach(item => {
            item.sound.play();
        });
        dipatchIsPlaying({ type: 'PLAY' });
    };
    const addSound = (sound: any) => {
        if (!isPlaying) {
            dipatchIsPlaying({ type: 'PLAY' });
        }
        dispatchSounds({ type: 'ADD', payload: sound });
    };
    const removeSound = (sound: string) => {
        dispatchSounds({ type: 'REMOVE', payload: sound });
    };

    const clearSounds = () => {
        dispatchSounds({ type: 'CLEAR' });
    };

    setCustomFlatList({
        keyExtractor: (item: any, index: number) => index.toString(),
        showsHorizontalScrollIndicator: false,
    });
    setCustomSectionList({
        keyExtractor: (item: any, index: number) => index.toString(),
        stickySectionHeadersEnabled: true,
        showsHorizontalScrollIndicator: false,
    });
    setCustomScrollView({ showsHorizontalScrollIndicator: false });
    return (
        <AudioContext.Provider value={{ isPlaying, sounds, pauseAudio, playAudio, addSound, removeSound, clearSounds }}>
            <Navigation />
        </AudioContext.Provider>
    );
}

export default App;
