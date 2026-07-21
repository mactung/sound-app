import categories from 'store/data/categories.json';

const normalize = (c: any) => ({ ...c, sounds: (c.sounds || []).map((s: any) => ({ ...s })) });

const getAllCategoriesByType = (type = 'sound') => {
    return (categories as any[]).filter(c => (c.type || 'sound') === type).map(normalize);
};

const getCategoryById = (id: number) => {
    const c = (categories as any[]).find(x => x._id === id);
    return c ? normalize(c) : null;
};

// No-op: categories come from the bundled JSON, nothing to persist.
const createCategory = () => {};

export default {
    createCategory,
    getCategoryById,
    getAllCategoriesByType,
};
