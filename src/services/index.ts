import dataCategories from 'store/data/categories.json';
import services from 'models/services';

export const initData = () => {
    return new Promise(resolve => {
        dataCategories.forEach((category: any) => {
            const categoryRealm: any = services.categoryService.getCategoryById(category._id);
            if (categoryRealm) {
                category.sounds.forEach((sound: any) => {
                    const sounndRealm: any = services.soundService.getSoundById(sound._id);
                    if (!sounndRealm) {
                        services.soundService.createSound(sound);
                    }
                });
            } else {
                services.categoryService.createCategory(category);
            }
        });
        resolve(1);
    });
};
