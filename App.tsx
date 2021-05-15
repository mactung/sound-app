// In App.js in a new project

import * as React from 'react';
import Navigation from './src/navigation';
import { setCustomFlatList } from 'utils/customs/setCustomFlatList';
import { setCustomSectionList } from 'utils/customs/setCustomSectionList';
import { setCustomScrollView } from 'utils/customs/setCustomScrollView';

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
    return <Navigation />;
}

export default App;
