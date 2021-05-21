import React from 'react';
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/settings';
import ComposerScreen from '../screens/composer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Colors } from 'styles/global.style';
import { Icon } from 'react-native-elements';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor={Colors.white}
            inactiveColor={Colors.light}
            barStyle={{ backgroundColor: Colors.dark, justifyContent: 'center' }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={24} name="planet-outline" type="ionicon" color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ComposerScreen"
                component={ComposerScreen}
                options={{
                    title: 'Composer',
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={24} name="musical-notes-outline" type="ionicon" color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused, color }) => (
                        <Icon size={24} name="settings-outline" type="ionicon" color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
