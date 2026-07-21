import React, { useRef, useCallback } from 'react';
import BottomTabs from './BottomTabs';
import NavigationService from 'navigation/NavigationSerivce';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkTheme, NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import ComposerScreen from 'screens/composer';
import SettingsScreen from 'screens/settings';
import SoundScreen from 'screens/sound';
import { Colors } from 'styles/global.style';

const Stack = createStackNavigator();

const AppTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: Colors.background,
        card: Colors.background,
        border: 'transparent',
    },
};

function Navigation() {
    const navigationRef = useRef<NavigationContainerRef<any> | null>(null);

    const ref = useCallback((refNavigaiton: NavigationContainerRef<any> | null) => {
        navigationRef.current = refNavigaiton;
        if (refNavigaiton) {
            NavigationService.setTopLevelNavigator(refNavigaiton);
        }
    }, []);
    return (
        <NavigationContainer ref={ref} theme={AppTheme}>
            <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen
                    name="ComposerScreen"
                    component={ComposerScreen}
                    options={{
                        gestureEnabled: false,
                        headerTransparent: true,
                    }}
                    initialParams={{ index: 0 }}
                />
                <Stack.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                    options={{
                        gestureEnabled: false,
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="SoundScreen"
                    component={SoundScreen}
                    options={{
                        gestureEnabled: true,
                        headerTransparent: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
