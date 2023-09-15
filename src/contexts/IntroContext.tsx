import React, { useState, useEffect, createContext } from 'react';
import { ChildrenProps } from '../types';
import { AppConfig, LocalStorage } from '../configs';

interface IntroContextValues {
    isIntro: boolean;
    handleHideIntro: () => void;
}

const IntroContext = createContext<IntroContextValues>({
    isIntro: true,
    handleHideIntro: () => {},
});

const IntroProvider: React.FC<ChildrenProps> = props => {
    const [isIntro, setIsIntro] = useState<boolean>(true);
    const handleHideIntro = async () => {
        setIsIntro(false);
        await LocalStorage.setItem(AppConfig.introKey, 'false');
    };

    useEffect(() => {
        (async () => {
            const result = await LocalStorage.getItem(AppConfig.introKey);
            if (result === 'false') {
                setIsIntro(false);
            } else {
                setIsIntro(true);
            }
        })();
    }, []);

    return (
        <IntroContext.Provider value={{ isIntro, handleHideIntro }}>
            {props.children}
        </IntroContext.Provider>
    );
};

export { IntroContext, IntroProvider };
