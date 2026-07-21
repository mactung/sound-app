import React from 'react';
import HomeScreen from '../screens/home';
import SettingsScreen from '../screens/settings';
import ComposerScreen from '../screens/composer';
import RelaxMode from '../screens/relax';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from 'styles/global.style';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.white,
                tabBarInactiveTintColor: Colors.light,
                tabBarStyle: {
                    backgroundColor: Colors.secondary,
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 64,
                    paddingBottom: 8,
                    paddingTop: 6,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                },
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ color }) => (
                        <Icon size={24} name="planet-outline" type="ionicon" color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="RelaxMode"
                component={RelaxMode}
                options={{
                    title: 'Relax',
                    tabBarIcon: ({ color }) => <Icon size={24} name="moon-outline" type="ionicon" color={color} />,
                }}
            />
            <Tab.Screen
                name="ComposerScreen"
                component={ComposerScreen}
                options={{
                    title: 'Composer',
                    tabBarIcon: ({ color }) => (
                        <Icon size={24} name="musical-notes-outline" type="ionicon" color={color} />
                    ),
                }}
                initialParams={{ index: 0 }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Icon size={24} name="settings-outline" type="ionicon" color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
