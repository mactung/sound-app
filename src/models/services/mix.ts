import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@saved_mixes';

const getVolume = (item: any): number => {
    try {
        const v = item?.sound?.getVolume?.();
        return typeof v === 'number' ? v : 1;
    } catch (e) {
        return 1;
    }
};

// Read all saved mixes (newest first, already stored in order).
const getMixes = async (): Promise<any[]> => {
    try {
        const raw = await AsyncStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        console.log('getMixes', error);
        return [];
    }
};

// Persist the current mix (sounds + music) under a name.
const saveMix = async (name: string, sounds: any[], music: any): Promise<number> => {
    try {
        const list = await getMixes();
        const nextId = list.length ? Math.max(...list.map((m: any) => m._id)) + 1 : 1;
        const mix = {
            _id: nextId,
            name: name?.trim() || 'My Mix',
            created_at: Date.now(),
            sounds: (sounds || []).map((s: any) => ({
                _id: s._id,
                name: s.name,
                file_name: s.file_name,
                type: s.type || 'sound',
                volume: getVolume(s),
            })),
            music: music
                ? {
                      _id: music._id,
                      name: music.name,
                      file_name: music.file_name,
                      type: 'music',
                      volume: getVolume(music),
                  }
                : null,
        };
        await AsyncStorage.setItem(KEY, JSON.stringify([mix, ...list]));
        return nextId;
    } catch (error) {
        console.log('saveMix', error);
        return -1;
    }
};

const deleteMix = async (_id: number): Promise<void> => {
    try {
        const list = await getMixes();
        await AsyncStorage.setItem(KEY, JSON.stringify(list.filter((m: any) => m._id !== _id)));
    } catch (error) {
        console.log('deleteMix', error);
    }
};

export default {
    saveMix,
    getMixes,
    deleteMix,
};
