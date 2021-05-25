import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from 'styles/global.style';

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
                <Text style={styles.titleText}>{sounds.length} items</Text>
                <Text style={styles.subText}>Current Mix</Text>
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
        paddingHorizontal: 10,
    },
    centerView: {
        alignItems: 'center',
    },
    titleText: {
        color: Colors.white,
        fontWeight: '600',
    },
    subText: {
        color: Colors.light,
    },
});

export default HeaderMixer;
