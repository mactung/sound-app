import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/settings';
import ComposerScreen from '../screens/composer';
import RelaxMode from '../screens/relax';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Radius } from 'styles/global.style';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const META: Record<string, { label: string; on: string; off: string }> = {
    HomeScreen: { label: 'Home', on: 'home', off: 'home-outline' },
    RelaxMode: { label: 'Relax', on: 'moon', off: 'moon-outline' },
    ComposerScreen: { label: 'Create', on: 'add-circle', off: 'add-circle-outline' },
    SettingsScreen: { label: 'Settings', on: 'settings', off: 'settings-outline' },
};

function TabBar({ state, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.wrap, { paddingBottom: insets.bottom || 12 }]}>
            <View style={styles.bar}>
                {state.routes.map((route, index) => {
                    const focused = state.index === index;
                    const meta = META[route.name] || { label: route.name, on: 'ellipse', off: 'ellipse-outline' };
                    const onPress = () => {
                        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
                        if (!focused && !event.defaultPrevented) {
                            navigation.navigate(route.name as never);
                        }
                    };
                    return (
                        <TouchableOpacity
                            key={route.key}
                            activeOpacity={0.8}
                            style={[styles.item, focused && styles.itemActive]}
                            onPress={onPress}>
                            <Icon
                                name={focused ? meta.on : meta.off}
                                type="ionicon"
                                size={22}
                                color={focused ? Colors.onAccent : Colors.textMuted}
                            />
                            {focused && <Text style={styles.label}>{meta.label}</Text>}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false }}
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="RelaxMode" component={RelaxMode} />
            <Tab.Screen name="ComposerScreen" component={ComposerScreen} initialParams={{ index: 0 }} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: Colors.background,
        paddingHorizontal: 16,
        paddingTop: 6,
    },
    bar: {
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: Radius.pill,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 14,
        elevation: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        paddingHorizontal: 14,
        borderRadius: Radius.pill,
        flex: 1,
    },
    itemActive: {
        backgroundColor: Colors.accent,
        flex: 1.6,
    },
    label: {
        color: Colors.onAccent,
        fontWeight: '700',
        fontSize: 13,
        marginLeft: 8,
    },
});

export default BottomTabs;
