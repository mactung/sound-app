import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AudioContext from 'contexts/AudioContext';
import SoundItem from './SoundItem';
import { Button } from 'react-native-elements';
const ListSounds = () => {
    const { sounds, clearSounds }: any = useContext(AudioContext);
    const renderItem = ({ item }: any) => {
        if (item.key === 'end') {
            return <Button title="Clear all" onPress={clearSounds} />;
        }
        return <SoundItem item={item} />;
    };
    return (
        <View style={styles.container}>
            <Text>Sounds ({sounds.length} / 10 )</Text>
            <FlatList
                data={sounds.length > 0 ? [...sounds, { key: 'end' }] : sounds}
                renderItem={renderItem}
                scrollEnabled={false}
                bounces={false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 300,
    },
});
export default ListSounds;
