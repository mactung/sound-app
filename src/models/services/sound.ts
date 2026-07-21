import categories from 'store/data/categories.json';

const isMusicCategory = (c: any) => (c.type || 'sound') === 'music';
const clone = (arr: any[]) => arr.map((s: any) => ({ ...s }));

const getAllSounds = () => {
    const list: any[] = [];
    (categories as any[]).forEach(c => {
        if (!isMusicCategory(c)) {
            list.push(...c.sounds);
        }
    });
    return clone(list);
};

const getSoundsByCategoryId = (_id: number = 0) => {
    if (!_id) {
        return getAllSounds();
    }
    const cat = (categories as any[]).find(c => c._id === _id);
    return cat ? clone(cat.sounds) : [];
};

const getAllMusics = () => {
    return (categories as any[]).filter(isMusicCategory).map(c => ({ ...c, sounds: clone(c.sounds) }));
};

const getSoundById = (id: number) => {
    for (const c of categories as any[]) {
        const s = c.sounds.find((x: any) => x._id === id);
        if (s) {
            return { ...s };
        }
    }
    return null;
};

const getAllMusicDidntDownload = () => [];

export default {
    getAllSounds,
    getSoundsByCategoryId,
    getAllMusics,
    getAllMusicDidntDownload,
    getSoundById,
};
