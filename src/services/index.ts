import realm from 'models/realm';
import RNFS from 'react-native-fs';
import categories from 'store/data/categories.json';
import services from 'models/services';


export const downloadAudio = async (sound: any) => {
    const linkSound = 'https://sound.mactung.info/sounds/' + sound.file_name + '.mp3';
    let localSong = RNFS.DocumentDirectoryPath + '/' + sound.file_name + '.mp3';
    return await RNFS.downloadFile({
        fromUrl: linkSound,
        toFile: localSong,
    })
        .promise.then((res: any) => {
            if (res.statusCode === 200) {
                console.log(111);
                return realm.write(() => {
                    sound.is_download = true;
                });
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};

export const initData = () => {
    return new Promise(resolve => {
        if (realm.objects('Category').isEmpty()) {
            categories.forEach((category: any) => {
                console.log(categories);
                services.categoryService.createCategory(category);
            });
            resolve(0);
        } else {
            resolve(0);
        }
    });
    // const sounds = services.soundService.getAllMusicDidntDownload();
    // if (sounds.length > 0) {
    //     Promise.all(sounds.map((sound: any) => downloadAudio(sound)));
    // }
};
