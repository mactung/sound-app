import { useDispatch, useSelector } from 'react-redux';
import { play, pause } from 'store/player';
const usePlayer = () => {
    const dispatch = useDispatch();
    const { sounds } = useSelector((state: any) => state.player);

    const pausePlayer = () => {
        dispatch(pause());
        sounds.forEach(item => {
            item.sound.pause();
        });
    };

    const playPlayer = () => {
        dispatch(play());
        sounds.forEach(item => {
            item.sound.play();
        });
    };

    return { pausePlayer, playPlayer };
};
export default usePlayer;
