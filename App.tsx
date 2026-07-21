// In App.js in a new project

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { setCustomFlatList } from 'utils/customs/setCustomFlatList';
import { setCustomSectionList } from 'utils/customs/setCustomSectionList';
import { setCustomScrollView } from 'utils/customs/setCustomScrollView';
import { Provider } from 'react-redux';
import { store } from 'store';
import { initData } from 'services';

function App() {
    setCustomFlatList({
        keyExtractor: (item: any, index: number) => index.toString(),
        showsHorizontalScrollIndicator: false,
    });
    setCustomSectionList({
        keyExtractor: (item: any, index: number) => index.toString(),
        stickySectionHeadersEnabled: true,
        showsHorizontalScrollIndicator: false,
    });
    setCustomScrollView({ showsHorizontalScrollIndicator: false });
    useEffect(() => {
        initData();
    }, []);
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <Provider store={store}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Navigation />
                </Provider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}

export default App;
