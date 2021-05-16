import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import SoundIcon from './SoundIcon';
const { height } = Dimensions.get('screen');
const ListSounds = ({ sounds }: any) => {
    const renderItem = ({ item }: any) => <SoundIcon item={item} />;
    return (
        <View style={styles.container}>
            <FlatList
                data={[...sounds, 'addItem']}
                renderItem={renderItem}
                horizontal
                contentContainerStyle={styles.flatListCotainer}
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { height: height / 2.5 },
    flatListCotainer: {
        justifyContent: 'center',
    },
});

export default ListSounds;
