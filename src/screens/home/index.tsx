import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemSound from './components/ItemSound';
import data from './data.json';
const HomeScreen = () => {
    const renderItem = ({ item, index }) => (
        <ItemSound title={item.title} image_url={item.image_url} _id={index} sound_path={item.sound_path} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle={styles.flatListCotainer}
                columnWrapperStyle={styles.columnWrapperStyle}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    flatListCotainer: {},
    columnWrapperStyle: { justifyContent: 'space-between' },
});
export default HomeScreen;
