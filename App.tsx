// In App.js in a new project

import React from 'react';
import Navigation from './src/navigation';
import { setCustomFlatList } from 'utils/customs/setCustomFlatList';
import { setCustomSectionList } from 'utils/customs/setCustomSectionList';
import { setCustomScrollView } from 'utils/customs/setCustomScrollView';
import { Provider } from 'react-redux';
import { store } from 'store';
import { initData } from 'services';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MusicControl from 'react-native-music-control';

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
        initData().then(() => {
            SplashScreen.hide();
        });
    }, []);
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}

export default App;
