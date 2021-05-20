import { ObjectSchema } from 'realm';
const SoundSchema: ObjectSchema = {
    name: 'Sound',
    properties: {
        _id: { type: 'int', indexed: true },
        name: 'string',
        status: 'string',
        audio_path: 'string?',
        image_path: 'string?',
        is_new: { type: 'boolean', default: true },
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default SoundSchema;
