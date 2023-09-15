import React from 'react';
import Root from './Root';
import { AppProvider } from './contexts';
import { Provider as RNPaperProvider } from 'react-native-paper';

const App: React.FC = () => {
    return (
        <RNPaperProvider>
            <AppProvider>
                <Root />
            </AppProvider>
        </RNPaperProvider>
    );
};

export default App;
