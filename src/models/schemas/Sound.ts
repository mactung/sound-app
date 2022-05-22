import { ObjectSchema } from 'realm';
const SoundSchema: ObjectSchema = {
    name: 'Sound',
    properties: {
        _id: { type: 'int', indexed: true },
        name: 'string',
        type: { type: 'string', default: 'sound' },
        file_name: 'string',
        image_path: 'string?',
        is_new: { type: 'bool', default: true },
        is_lock: { type: 'bool', default: true },
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default SoundSchema;
