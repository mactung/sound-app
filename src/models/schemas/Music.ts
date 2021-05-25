import { ObjectSchema } from 'realm';
const MusicSchema: ObjectSchema = {
    name: 'Music',
    properties: {
        _id: { type: 'int', indexed: true },
        name: 'string',
        type: 'string',
        image_path: 'string?',
        author: 'string?',
        is_new: { type: 'boolean', default: true },
        is_show: { type: 'boolean', default: true },
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default MusicSchema;
