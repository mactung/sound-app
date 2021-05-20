import Realm from 'realm';
import MixSchema from './schemas/Mix';
import SoundSchema from './schemas/Sound';

const realm = new Realm({
    path: 'soundApp.realm',
    schema: [SoundSchema, MixSchema],
    schemaVersion: 1,
});

export default realm;
