import { useEffect } from 'react';
import services from 'models/services';
import categories from 'store/data/categories.json';
import realm from 'models/realm';
const useInitData = () => {
    useEffect(() => {
        if (realm.objects('Category').isEmpty()) {
            categories.forEach((category: any) => {
                console.log(categories);
                services.categoryService.createCategory(category);
            });
        }
        // const sounds = services.soundService.getAllMusicDidntDownload();
        // if (sounds.length > 0) {
        //     Promise.all(sounds.map((sound: any) => downloadAudio(sound)));
        // }
    });
};

export default useInitData;
