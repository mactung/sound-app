import Realm from 'realm';
import MixSchema from './schemas/Mix';
import SoundSchema from './schemas/Sound';
import CategorySchema from './schemas/Category';

const realm = new Realm({
    path: 'relaxSoundApp.realm',
    schema: [SoundSchema, MixSchema, CategorySchema],
    schemaVersion: 2,
});

export default realm;
