import React, { useRef, useCallback } from 'react';
import BottomTabs from './BottomTabs';
import SoundScreen from 'screens/sound';
import NavigationService from 'navigation/NavigationSerivce';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import ComposerScreen from 'screens/composer';

const Stack = createStackNavigator();

function Navigation() {
    const navigationRef = useRef<NavigationContainerRef>();
    // const routeNameRef = useRef<string>();

    const ref = useCallback(refNavigaiton => {
        navigationRef.current = refNavigaiton;
        NavigationService.setTopLevelNavigator(refNavigaiton);
    }, []);
    return (
        <NavigationContainer ref={ref}>
            <Stack.Navigator initialRouteName="ComposerScreen">
                <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen
                    name="SoundScreen"
                    component={SoundScreen}
                    options={({ route }: any) => ({
                        gestureEnabled: false,
                        headerTransparent: true,
                        headerBackTitleVisible: false,
                        title: route.params.name,
                    })}
                />
                <Stack.Screen
                    name="ComposerScreen"
                    component={ComposerScreen}
                    options={({ route }: any) => ({
                        gestureEnabled: false,
                        headerTransparent: true,
                        headerBackTitleVisible: false,
                        title: route.params.name,
                        headerShown: false,
                    })}
                    initialParams={{ index: 0 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
