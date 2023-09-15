import React from 'react';
import { Image, StyleProp, ImageStyle } from 'react-native';

interface AppLogoProps {
    tag: 'named' | 'unnamed';
    className?: string;
    logoStyle?: StyleProp<ImageStyle>;
}

const AppLogo: React.FC<AppLogoProps> = props => {
    return (
        <>
            {props.tag === 'named' ? (
                <Image
                    style={props.logoStyle}
                    className={props.className}
                    source={require('../../assets/images/named_logo.png')}
                />
            ) : (
                <Image
                    style={props.logoStyle}
                    className={props.className}
                    source={require('../../assets/images/unnamed_logo.png')}
                />
            )}
        </>
    );
};

export default AppLogo;
