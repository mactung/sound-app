import React, { useState } from 'react';
import { Alert, Linking, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import AppBackground from 'components/AppBackground';
import Description from './components/Description';
import { Colors, Radius, Spacing } from 'styles/global.style';

const urlPolicy = 'https://aienglish.megaads.vn/privacy-policy';

const Row = ({ label, icon, onPress }: { label: string; icon: string; onPress: () => void }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={onPress}>
        <Icon name={icon} type="ionicon" size={20} color={Colors.accent} containerStyle={styles.rowIcon} />
        <Text style={styles.rowLabel}>{label}</Text>
        <Icon name="chevron-forward" type="ionicon" size={18} color={Colors.textMuted} />
    </TouchableOpacity>
);

const SettingsScreen = () => {
    const [isShowDescription, setIsShowDescription] = useState<boolean>(false);

    const handlePress = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };

    return (
        <AppBackground>
            <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
                <Text style={styles.title}>Settings</Text>
                <Row label="Privacy Policy" icon="shield-checkmark-outline" onPress={() => handlePress(urlPolicy)} />
                <Row label="Description" icon="information-circle-outline" onPress={() => setIsShowDescription(true)} />
                <Description isModalVisible={isShowDescription} setIsModalVisible={setIsShowDescription} />
            </SafeAreaView>
        </AppBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Spacing.md,
    },
    title: {
        color: Colors.white,
        fontSize: 28,
        fontWeight: '700',
        marginTop: Spacing.md,
        marginBottom: Spacing.lg,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card,
        borderRadius: Radius.md,
        paddingVertical: 16,
        paddingHorizontal: Spacing.md,
        marginBottom: Spacing.sm,
    },
    rowIcon: {
        marginRight: Spacing.sm,
    },
    rowLabel: {
        flex: 1,
        color: Colors.white,
        fontSize: 15,
        fontWeight: '500',
    },
});

export default SettingsScreen;
