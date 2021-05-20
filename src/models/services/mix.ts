import realm from '../realm';

const createMix = (sound: any) => {
    try {
        realm.create('Mix', sound);
    } catch (error) {
        console.log('createMix', error);
    }
};
export default {
    createMix,
};
