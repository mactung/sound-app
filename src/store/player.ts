import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    sounds: any[];
    music: any;
    isPlaying: boolean;
}

const initialState: State = {
    sounds: [],
    isPlaying: false,
    music: null,
};

const soundSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setSounds: (state, action: PayloadAction<any>) => {
            state.sounds = action.payload;
        },
        addSound: (state, action: PayloadAction<any>) => {
            state.sounds = [...state.sounds, action.payload];
        },
        clearSounds: state => {
            state.sounds.forEach(item => item.sound.stop());
            state.sounds = [];
        },
        removeSound: (state, action: PayloadAction<any>) => {
            state.sounds = state.sounds.filter((item: any) => {
                if (item.file_name === action.payload) {
                    item.sound.stop();
                }
                return item.file_name !== action.payload;
            });
        },
        addMusic: (state, action: PayloadAction<any>) => {
            if (state.music) {
                state.music.sound.stop();
            }
            state.music = action.payload;
        },
        removeMusic: state => {
            if (state.music) {
                state.music.sound.stop();
            }
            state.music = null;
        },
        play: (state: State) => {
            state.isPlaying = true;
        },
        pause: (state: State) => {
            state.isPlaying = false;
        },
    },
});
export const { addSound, clearSounds, removeSound, play, pause, addMusic, removeMusic, setSounds } = soundSlice.actions;
export default soundSlice.reducer;
