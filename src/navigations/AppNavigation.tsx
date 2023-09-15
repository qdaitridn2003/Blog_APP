import React, { useState, useEffect, useContext } from 'react';
import { IntroScreen, SplashScreen } from '../screens';
import { AuthContext, IntroContext } from '../contexts';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';

const AppNavigation: React.FC = () => {
    const { isLogin } = useContext(AuthContext);
    const { isIntro } = useContext(IntroContext);
    const [isSplashed, setSplashed] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setSplashed(false), 3000);
    });

    if (isSplashed) {
        return <SplashScreen />;
    } else {
        if (isIntro) {
            return <IntroScreen />;
        } else {
            return isLogin ? <HomeNavigation /> : <AuthNavigation />;
        }
    }
};

export default AppNavigation;
