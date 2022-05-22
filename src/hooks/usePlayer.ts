import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { play, pause } from 'store/player';
const usePlayer = () => {
    const dispatch = useDispatch();
    const { sounds, music } = useSelector((state: any) => state.player);

    const pausePlayer = () => {
        if (sounds.length > 0) {
            sounds.forEach(item => {
                if (item.sound._playing) {
                    item.sound.pause();
                }
            });
        }
        if (music) {
            if (music.sound._playing) {
                music.sound.pause();
            }
        }
        dispatch(pause());
    };

    const playPlayer = () => {
        if (sounds.length > 0) {
            sounds.forEach((item: any) => {
                if (!item.sound._playing) {
                    item.sound.play((success: any) => {
                        if (success) {
                            console.log('successfully finished playing');
                        } else {
                            console.log('playback failed due to audio decoding errors');
                        }
                    });
                }
            });
        }
        if (music) {
            console.log('play Music');
            music.sound.play((success: any) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        }
        dispatch(play());
    };

    return { pausePlayer, playPlayer };
};
export default usePlayer;
