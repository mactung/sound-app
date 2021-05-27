import { ObjectSchema } from 'realm';
const CategorySchema: ObjectSchema = {
    name: 'Category',
    properties: {
        _id: { type: 'int', indexed: true },
        name: 'string',
        is_show: { type: 'bool', default: true },
        type: { type: 'string', default: 'sound' },
        description: 'string?',
        sounds: { type: 'Sound[]', default: [] },
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default CategorySchema;
