import { ObjectSchema } from 'realm';
const MixSchema: ObjectSchema = {
    name: 'Mix',
    properties: {
        _id: { type: 'int', indexed: true },
        name: { type: 'string', default: 'My Mix' },
        // JSON payload: { sounds: [{_id,name,file_name,type,volume}], music: {...}|null }
        data: { type: 'string', default: '{}' },
        created_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default MixSchema;
