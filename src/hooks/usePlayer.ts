import { useDispatch, useSelector } from 'react-redux';
import { play, pause } from 'store/player';
const usePlayer = () => {
    const dispatch = useDispatch();
    const { sounds, music } = useSelector((state: any) => state.player);

    const pausePlayer = () => {
        dispatch(pause());
        if (sounds.length > 0) {
            sounds.forEach(item => {
                item.sound.pause();
            });
        }
        music.sound.pause();
    };

    const playPlayer = () => {
        dispatch(play());
        if (sounds.length > 0) {
            sounds.forEach(item => {
                item.sound.play();
            });
        }
        music.sound.play();
    };

    return { pausePlayer, playPlayer };
};
export default usePlayer;
