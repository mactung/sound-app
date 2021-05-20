import { ObjectSchema } from 'realm';
const MixSchema: ObjectSchema = {
    name: 'Mix',
    properties: {
        _id: { type: 'int', indexed: true },
        title: 'string',
        status: 'string?',
        time: 'number?',
        sounds: { type: 'Sound[]', default: [] },
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default MixSchema;
