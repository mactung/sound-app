import * as React from 'react';
import Svg, { SvgProps, LinearGradient, Stop, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 98 98" width={512} height={512} {...props}>
            <LinearGradient id="prefix__a" gradientUnits="userSpaceOnUse" x1={44.3} y1={39.2} x2={44.3} y2={62.8}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M44.3 39.2c-1.7 0-3 1.3-3 3v17.6c0 1.7 1.3 3 3 3s3-1.3 3-3V42.2c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__a)"
            />
            <LinearGradient id="prefix__b" gradientUnits="userSpaceOnUse" x1={35} y1={29.9} x2={35} y2={72.1}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M35 29.9c-1.7 0-3 1.3-3 3v36.2c0 1.7 1.3 3 3 3s3-1.3 3-3V32.9c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__b)"
            />
            <LinearGradient id="prefix__c" gradientUnits="userSpaceOnUse" x1={25.6} y1={21.2} x2={25.6} y2={80.8}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M25.6 21.2c-1.7 0-3 1.3-3 3v53.6c0 1.7 1.3 3 3 3s3-1.3 3-3V24.2c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__c)"
            />
            <LinearGradient id="prefix__d" gradientUnits="userSpaceOnUse" x1={16.3} y1={29.9} x2={16.3} y2={72.1}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M16.3 29.9c-1.7 0-3 1.3-3 3v36.2c0 1.7 1.3 3 3 3s3-1.3 3-3V32.9c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__d)"
            />
            <LinearGradient id="prefix__e" gradientUnits="userSpaceOnUse" x1={6.9} y1={38.6} x2={6.9} y2={63.4}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M6.9 38.6c-1.7 0-3 1.3-3 3v18.8c0 1.7 1.3 3 3 3s3-1.3 3-3V41.6c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__e)"
            />
            <LinearGradient id="prefix__f" gradientUnits="userSpaceOnUse" x1={72.401} y1={21.2} x2={72.401} y2={80.8}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M72.4 21.2c-1.7 0-3 1.3-3 3v53.6c0 1.7 1.3 3 3 3s3-1.3 3-3V24.2c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__f)"
            />
            <LinearGradient id="prefix__g" gradientUnits="userSpaceOnUse" x1={63} y1={29.9} x2={63} y2={72.1}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M63 29.9c-1.7 0-3 1.3-3 3v36.2c0 1.7 1.3 3 3 3s3-1.3 3-3V32.9c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__g)"
            />
            <LinearGradient id="prefix__h" gradientUnits="userSpaceOnUse" x1={53.7} y1={34.6} x2={53.7} y2={67.4}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M53.7 34.6c-1.7 0-3 1.3-3 3v26.8c0 1.7 1.3 3 3 3s3-1.3 3-3V37.6c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__h)"
            />
            <LinearGradient id="prefix__i" gradientUnits="userSpaceOnUse" x1={81.7} y1={29.9} x2={81.7} y2={72.1}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M81.7 29.9c-1.7 0-3 1.3-3 3v36.2c0 1.7 1.3 3 3 3s3-1.3 3-3V32.9c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__i)"
            />
            <LinearGradient id="prefix__j" gradientUnits="userSpaceOnUse" x1={91.1} y1={38.6} x2={91.1} y2={63.4}>
                <Stop offset={0} stopColor="#00efd1" />
                <Stop offset={1} stopColor="#00acea" />
            </LinearGradient>
            <Path
                d="M91.1 38.6c-1.7 0-3 1.3-3 3v18.8c0 1.7 1.3 3 3 3s3-1.3 3-3V41.6c0-1.7-1.3-3-3-3z"
                fill="url(#prefix__j)"
            />
        </Svg>
    );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
