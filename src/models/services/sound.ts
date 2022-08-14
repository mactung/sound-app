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

const getAllMusicDidntDownload = () => {
    try {
        return realm.objects('Sound').filtered('is_download = false');
    } catch (error) {
        console.log('getAll', error);
        return [];
    }
};

const getSoundById = (id: number) => {
    try {
        const sounds = realm.objects('Sound').filtered(`_id = ${id}`);
        if (sounds.length > 0) {
            return sounds[0].toJSON();
        } else {
            return null;
        }
    } catch (error) {
        console.log('getSoundById', error);
        return [];
    }
};

export default {
    createSound,
    getAllSounds,
    getSoundsByCategoryId,
    getAllMusics,
    getAllMusicDidntDownload,
    getSoundById,
};
