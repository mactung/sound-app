import React, { useEffect, useState } from 'react';
import services from 'models/services';
import { FlatList, StyleSheet, View } from 'react-native';
import CategoryFilterItem from './CategoryFilterItem';
const CategoryFilter = ({ setData, setCurrentCategoryId, currentCategoryId }: any) => {
    const [categoriesData, setCategoriesData] = useState<any[]>([]);
    const onChooseCategory = (categoryId: number) => {
        const data = services.soundService.getSoundsByCategoryId(categoryId);
        setData(data);
        setCurrentCategoryId(categoryId);
    };
    useEffect(() => {
        const categoriesService = services.categoryService.getAllCategoriesByType();
        setCategoriesData(categoriesService);
    }, []);
    const renderItemCategoryFilter = ({ item }: any) => (
        <CategoryFilterItem item={item} onPress={onChooseCategory} currentCategoryId={currentCategoryId} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={[{ _id: 0, name: 'All' }, ...categoriesData]}
                renderItem={renderItemCategoryFilter}
                horizontal
                style={styles.flatlist}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    flatlist: {
        marginBottom: 20,
    },
});

export default CategoryFilter;
