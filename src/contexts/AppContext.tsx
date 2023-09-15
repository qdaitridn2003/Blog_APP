import React, { createContext } from 'react';
import { ChildrenProps } from '../types';
import { OverlayProvider } from './OverlayContext';
import { IntroProvider } from './IntroContext';
import { AuthProvider } from './AuthContext';

const AppContext = createContext({});

const AppProvider: React.FC<ChildrenProps> = props => {
    return (
        <AppContext.Provider value={{}}>
            <OverlayProvider>
                <IntroProvider>
                    <AuthProvider>{props.children}</AuthProvider>
                </IntroProvider>
            </OverlayProvider>
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
