import React, { useRef, useCallback } from 'react';
import BottomTabs from './BottomTabs';
import NavigationService from 'navigation/NavigationSerivce';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import ComposerScreen from 'screens/composer';
import SettingsScreen from 'screens/settings';

const Stack = createStackNavigator();

function Navigation() {
    const navigationRef = useRef<NavigationContainerRef<any> | null>(null);

    const ref = useCallback((refNavigaiton: NavigationContainerRef<any> | null) => {
        navigationRef.current = refNavigaiton;
        if (refNavigaiton) {
            NavigationService.setTopLevelNavigator(refNavigaiton);
        }
    }, []);
    return (
        <NavigationContainer ref={ref}>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
