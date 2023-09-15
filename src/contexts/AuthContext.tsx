import React, { useState, useEffect, createContext } from 'react';
import { ChildrenProps } from '../types';
import { AppConfig, LocalStorage } from '../configs';

interface AuthContextValues {
    isLogin: boolean;
    handleSignIn: () => void;
    handleSignOut: () => void;
}

const AuthContext = createContext<AuthContextValues>({
    isLogin: false,
    handleSignIn: () => {},
    handleSignOut: () => {},
});

const AuthProvider: React.FC<ChildrenProps> = props => {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const handleSignIn = async () => {
        setIsLogin(true);
        await LocalStorage.setItem(AppConfig.loginKey, 'true');
    };

    const handleSignOut = async () => {
        setIsLogin(false);
        await LocalStorage.clearItem(AppConfig.loginKey);
    };

    useEffect(() => {
        (async () => {
            const isSignIn = await LocalStorage.getItem(AppConfig.loginKey);
            if (isSignIn === 'true') {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ isLogin, handleSignIn, handleSignOut }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
