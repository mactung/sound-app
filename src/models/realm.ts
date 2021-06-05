import Realm from 'realm';
import MixSchema from './schemas/Mix';
import SoundSchema from './schemas/Sound';
import CategorySchema from './schemas/Category';

const realm = new Realm({
    path: 'soundApp.realm',
    schema: [SoundSchema, MixSchema, CategorySchema],
    schemaVersion: 4,
});

export default realm;
