import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/settings';
import CustomScreen from '../screens/custom';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="CustomScreen" component={CustomScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabs;
