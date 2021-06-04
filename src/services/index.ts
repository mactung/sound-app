import realm from 'models/realm';
import RNFS from 'react-native-fs';

export const downloadAudio = async (sound: any) => {
    const linkSound = 'https://sound.mactung.info/sounds/' + sound.file_name + '.mp3';
    let localSong = RNFS.DocumentDirectoryPath + '/' + sound.file_name + '.mp3';
    console.log(localSong);
    return await RNFS.downloadFile({
        fromUrl: linkSound,
        toFile: localSong,
    })
        .promise.then((res: any) => {
            if (res.statusCode === 200) {
                return realm.write(() => {
                    sound.audio_path = localSong;
                });
            }
        })
        .catch(err => {
            console.log(err);
            return err;
        });
};
