import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from 'styles/global.style';

const Music = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                MUSIC <Text style={styles.textNunber}>(0/1)</Text>
            </Text>
            <Text style={styles.text}>You don't have any music in this mix.</Text>
            <Button buttonStyle={styles.buttonView} title="Add Music" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        borderBottomWidth: 0.18,
        borderBottomColor: Colors.light,
        paddingVertical: 20,
    },
    textTitle: {
        color: Colors.white,
        fontWeight: '500',
        marginBottom: 20,
    },
    text: {
        color: Colors.white,
        marginBottom: 20,
    },
    buttonView: {
        borderRadius: 30,
        backgroundColor: Colors.dark,
        borderColor: Colors.light,
        borderWidth: 1,
        width: 150,
    },
    textNunber: {
        color: Colors.gray,
    },
});
export default Music;
