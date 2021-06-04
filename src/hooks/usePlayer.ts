import { useDispatch, useSelector } from 'react-redux';
import { play, pause } from 'store/player';
const usePlayer = () => {
    const dispatch = useDispatch();
    const { sounds, music } = useSelector((state: any) => state.player);

    const pausePlayer = () => {
        if (sounds.length > 0) {
            sounds.forEach(item => {
                item.sound.pause();
            });
        }
        dispatch(pause());
        if (music) {
            music.sound.pause();
        }
    };

    const playPlayer = () => {
        if (sounds.length > 0) {
            sounds.forEach(item => {
                item.sound.play();
            });
        }
        dispatch(play());
        if (music) {
            music.sound.play();
        }
    };

    return { pausePlayer, playPlayer };
};
export default usePlayer;
