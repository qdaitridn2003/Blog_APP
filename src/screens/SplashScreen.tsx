import React from 'react';
import { AppLogo, ContainerView } from '../components';

const SplashScreen: React.FC = () => {
    return (
        <ContainerView className="justify-center items-center">
            <AppLogo tag="named" className="w-64 h-64" />
        </ContainerView>
    );
};

export default SplashScreen;
