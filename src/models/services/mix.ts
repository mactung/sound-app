import realm from '../realm';

const getVolume = (item: any): number => {
    try {
        const v = item?.sound?.getVolume?.();
        return typeof v === 'number' ? v : 1;
    } catch (e) {
        return 1;
    }
};

// Persist the current mix (sounds + music) under a name.
const saveMix = (name: string, sounds: any[], music: any): number => {
    const all = realm.objects('Mix');
    const nextId = all.length ? Math.max(...all.map((m: any) => m._id)) + 1 : 1;
    const payload = {
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
    try {
        realm.write(() => {
            realm.create('Mix', {
                _id: nextId,
                name: name?.trim() || 'My Mix',
                data: JSON.stringify(payload),
                created_at: new Date(),
            });
        });
        return nextId;
    } catch (error) {
        console.log('saveMix', error);
        return -1;
    }
};

// Return saved mixes (newest first) as plain objects with parsed payload.
const getMixes = () => {
    try {
        return realm
            .objects('Mix')
            .sorted('created_at', true)
            .map((m: any) => {
                let parsed: any = { sounds: [], music: null };
                try {
                    parsed = JSON.parse(m.data);
                } catch (e) {}
                return {
                    _id: m._id,
                    name: m.name,
                    created_at: m.created_at,
                    sounds: parsed.sounds || [],
                    music: parsed.music || null,
                };
            });
    } catch (error) {
        console.log('getMixes', error);
        return [];
    }
};

const deleteMix = (_id: number) => {
    try {
        realm.write(() => {
            const obj = realm.objectForPrimaryKey('Mix', _id);
            if (obj) {
                realm.delete(obj);
            }
        });
    } catch (error) {
        console.log('deleteMix', error);
    }
};

export default {
    saveMix,
    getMixes,
    deleteMix,
};
