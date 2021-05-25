import { ObjectSchema } from 'realm';
const CategorySchema: ObjectSchema = {
    name: 'Category',
    properties: {
        _id: { type: 'int', indexed: true },
        name: 'string',
        is_show: { type: 'boolean', default: true },
        type: 'string?',
        description: 'string?',
        created_at: { type: 'date', default: new Date() },
        updated_at: { type: 'date', default: new Date() },
    },
    primaryKey: '_id',
};
export default CategorySchema;
