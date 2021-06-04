import { ObjectSchema } from 'realm';
const MixSchema: ObjectSchema = {
    name: 'Mix',
    properties: {
        _id: { type: 'int', indexed: true },
        name: { type: 'string', default: 'Unsaved Mix' },
        status: 'string?',
        time: 'int?',
        sounds: { type: 'Sound[]', default: [] },
        music: { type: 'Sound', default: {} },
        type: 'string',
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default MixSchema;
