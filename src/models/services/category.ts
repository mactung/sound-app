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

const getCategoryById = (id: number) => {
    try {
        const categories = realm.objects('Category').filtered(`_id = "${id}"`);
        if (categories.length > 0) {
            return categories[0].toJSON();
        } else {
            return null;
        }
    } catch (error) {
        console.log('getCategoryById', error);
        return [];
    }
};

const getAllCategoriesByType = (type = 'sound') => {
    try {
        return realm.objects('Category').filtered(`type = "${type}"`).toJSON();
    } catch (error) {
        console.log('getAllCategoriesByType', error);
        return [];
    }
};

export default {
    createCategory,
    getCategoryById,
    getAllCategoriesByType,
};
