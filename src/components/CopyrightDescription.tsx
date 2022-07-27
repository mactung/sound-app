import React from 'react';
import { View, Text } from 'react-native';
const list = [
    `Autumn Scene by Keys of Moon | https://soundcloud.com/keysofmoon Music promoted by
        https://www.chosic.com/free-music/all/ Creative Commons CC BY 4.0
        https://creativecommons.org/licenses/by/4.0/`,
    ` Calm and Peaceful by LesFM | https://lesfm.net/relaxing-background-music/
        Music promoted by https://www.chosic.com/free-music/all/
        Creative Commons CC BY 3.0
        https://creativecommons.org/licenses/by/3.0/
    `,
    ` Spring Flowers by Keys of Moon | https://soundcloud.com/keysofmoon
        Music promoted by https://www.chosic.com/free-music/all/
        Creative Commons CC BY 4.0
        https://creativecommons.org/licenses/by/4.0/
    `,
    `Sunset Landscape by Keys of Moon | https://soundcloud.com/keysofmoon
    Music promoted by https://www.chosic.com/free-music/all/
    Creative Commons CC BY 4.0
    https://creativecommons.org/licenses/by/4.0/
    `,
];
const CopyrightDescription = () => {
    return (
        <View>
            {list.map(l => (
                <Text>{l}</Text>
            ))}
        </View>
    );
};
export default CopyrightDescription;
