import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    sounds: any[];
    isPlaying: boolean;
}

const initialState: State = {
    sounds: [],
    isPlaying: false,
};

const soundSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addSound: (state, action: PayloadAction<any>) => {
            state.sounds = [...state.sounds, action.payload];
        },
        clearSounds: state => {
            state.sounds.forEach(item => item.sound.stop());
            state.sounds = [];
        },
        removeSound: (state, action: PayloadAction<any>) => {
            state.sounds = state.sounds.filter((item: any) => item.type !== action.payload);
        },
        play: (state: State) => {
            state.isPlaying = true;
        },
        pause: (state: State) => {
            state.isPlaying = false;
        },
    },
});
export const { addSound, clearSounds, removeSound, play, pause } = soundSlice.actions;
export default soundSlice.reducer;
