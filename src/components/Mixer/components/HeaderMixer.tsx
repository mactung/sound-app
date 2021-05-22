import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderMixer = ({ setIsModalVisible, sounds }: any) => {
    return (
        <View style={styles.container}>
            <Icon
                size={32}
                name="chevron-down"
                type="ionicon"
                color="#517fa4"
                onPress={() => setIsModalVisible(false)}
            />
            <View style={styles.centerView}>
                <Text>{sounds.length} items</Text>
                <Text>Current Mix</Text>
            </View>
            <Icon size={30} name="share-social" type="ionicon" color="#517fa4" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    centerView: {
        alignItems: 'center',
    },
});

export default HeaderMixer;
