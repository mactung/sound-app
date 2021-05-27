import { useEffect } from 'react';
import services from 'models/services';
import categories from 'store/data/categories.json';
import realm from 'models/realm';
const useInitData = () => {
    useEffect(() => {
        if (realm.objects('Category').isEmpty()) {
            categories.forEach((category: any) => {
                services.categoryService.createCategory(category);
            });

        }
    });
};

export default useInitData;
