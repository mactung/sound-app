import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sound from 'react-native-sound';
import services from 'models/services';
import { addMusic, addSound, clearSounds, play, removeMusic } from 'store/player';

Sound.setCategory('Playback');

export interface SavedMixItem {
    _id: number;
    name: string;
    file_name: string;
    type: string;
    volume: number;
}
export interface SavedMix {
    _id: number;
    name: string;
    created_at: Date;
    sounds: SavedMixItem[];
    music: SavedMixItem | null;
}

const useMixLibrary = () => {
    const dispatch = useDispatch();
    const [mixes, setMixes] = useState<SavedMix[]>([]);

    const reload = useCallback(() => {
        setMixes(services.mixService.getMixes() as SavedMix[]);
    }, []);

    const saveMix = useCallback(
        (name: string, sounds: any[], music: any) => {
            const id = services.mixService.saveMix(name, sounds, music);
            reload();
            return id;
        },
        [reload],
    );

    const deleteMix = useCallback(
        (id: number) => {
            services.mixService.deleteMix(id);
            reload();
        },
        [reload],
    );

    const loadMix = useCallback(
        (mix: SavedMix) => {
            // stop/clear whatever is currently playing
            dispatch(clearSounds());
            dispatch(removeMusic());

            const spawn = (item: SavedMixItem, isMusic: boolean) => {
                const snd = new Sound(item.file_name, Sound.MAIN_BUNDLE, error => {
                    if (error) {
                        console.log('loadMix sound error', item.file_name, error);
                        return;
                    }
                    snd.setVolume(typeof item.volume === 'number' ? item.volume : 1);
                    snd.setNumberOfLoops(-1);
                    snd.play();
                    if (isMusic) {
                        dispatch(addMusic({ ...item, sound: snd }));
                    } else {
                        dispatch(addSound({ ...item, sound: snd }));
                    }
                });
            };

            mix.sounds.forEach(s => spawn(s, false));
            if (mix.music) {
                spawn(mix.music, true);
            }
            dispatch(play());
        },
        [dispatch],
    );

    return { mixes, reload, saveMix, deleteMix, loadMix };
};

export default useMixLibrary;
