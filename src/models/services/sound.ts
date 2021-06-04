import realm from '../realm';

const createSound = (sound: any) => {
    try {
        realm.write(() => {
            realm.create('Sound', sound);
        });
    } catch (error) {
        console.log('createSound', error);
    }
};

const getAllSounds = () => {
    try {
        return realm.objects('Sound').filtered('type = "sound"').toJSON();
    } catch (error) {
        console.log('getAllSounds', error);
        return [];
    }
};
const getSoundsByCategoryId = (_id: number = 0) => {
    try {
        if (_id === 0) {
            return getAllSounds();
        }
        return realm
            .objects('Category')
            .filtered('_id = ' + _id)
            .toJSON()[0].sounds;
    } catch (error) {
        console.log('getgetSoundsByCategoryIdAllSounds', error);
        return [];
    }
};
const getAllMusics = () => {
    try {
        return realm.objects('Category').filtered('type = "music"').toJSON();
    } catch (error) {
        console.log('getgetSoundsByCategoryIdAllSounds', error);
        return [];
    }
};

const getAll = () => {
    try {
        return realm.objects('Sound').filtered('audio_path = null');
    } catch (error) {
        console.log('getAll', error);
        return [];
    }
};

export default {
    createSound,
    getAllSounds,
    getSoundsByCategoryId,
    getAllMusics,
    getAll,
};
