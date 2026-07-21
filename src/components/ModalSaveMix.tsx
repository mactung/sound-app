import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Colors, ModalAnim, Radius, Spacing } from 'styles/global.style';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    onSave: (name: string) => void;
    defaultName?: string;
}

const ModalSaveMix: FC<Props> = ({ isVisible, onClose, onSave, defaultName }) => {
    const [name, setName] = useState<string>(defaultName || '');

    useEffect(() => {
        if (isVisible) {
            setName(defaultName || '');
        }
    }, [isVisible, defaultName]);

    const submit = () => {
        onSave(name.trim() || 'My Mix');
    };

    return (
        <Modal
            isVisible={isVisible}
            backdropColor={Colors.primary}
            backdropOpacity={0.7}
            animationIn={ModalAnim.animationIn}
            animationOut={ModalAnim.animationOut}
            animationInTiming={ModalAnim.animationInTiming}
            animationOutTiming={ModalAnim.animationOutTiming}
            useNativeDriverForBackdrop
            hideModalContentWhileAnimating
            onBackdropPress={onClose}
            avoidKeyboard>
            <View style={styles.card}>
                <Text style={styles.title}>Save mix</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Mix name"
                    placeholderTextColor={Colors.textMuted}
                    autoFocus
                    maxLength={40}
                    returnKeyType="done"
                    onSubmitEditing={submit}
                />
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onClose}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.save]} onPress={submit}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.sheet,
        borderRadius: Radius.lg,
        padding: Spacing.md,
    },
    title: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: Spacing.sm,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: Radius.md,
        paddingHorizontal: 14,
        paddingVertical: 12,
        color: Colors.white,
        fontSize: 15,
        borderWidth: 1,
        borderColor: Colors.glassBorder,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: Spacing.md,
    },
    button: {
        borderRadius: Radius.pill,
        paddingVertical: 10,
        paddingHorizontal: 22,
        marginLeft: Spacing.sm,
    },
    cancel: {
        backgroundColor: 'transparent',
    },
    cancelText: {
        color: Colors.textMuted,
        fontWeight: '600',
    },
    save: {
        backgroundColor: Colors.accent,
    },
    saveText: {
        color: Colors.onAccent,
        fontWeight: '700',
    },
});

export default ModalSaveMix;
