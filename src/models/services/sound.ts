import realm from '../realm';

const createSound = (sound: any) => {
    try {
        realm.create('Sound', sound);
    } catch (error) {
        console.log('createSound', error);
    }
};
export default {
    createSound,
};
