import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AudioContext from 'contexts/AudioContext';
import SoundItem from './SoundItem';
const ListSounds = () => {
    const { sounds }: any = useContext(AudioContext);
    const renderItem = ({ item }) => <SoundItem item={item} />;
    return (
        <View style={styles.container}>
            <Text>Sounds ({sounds.length} / 10 )</Text>
            <FlatList data={sounds} renderItem={renderItem} scrollEnabled={false} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 300,
    },
});
export default ListSounds;
