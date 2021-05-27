import realm from '../realm';

const createCategory = (category: any) => {
    try {
        realm.write(() => {
            realm.create('Category', category);
        });
    } catch (error) {
        console.log('createCategory', error);
    }
};

const getAllCategoriesSound = () => {
    try {
        return realm.objects('Category').filtered('type = "sound"').toJSON();
    } catch (error) {
        console.log('getAllCategories', error);
        return [];
    }
};

export default {
    createCategory,
    getAllCategoriesSound,
};
