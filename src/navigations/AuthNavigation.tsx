/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppLogo } from '../components';
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from '../screens';

const AuthNavigation: React.FC = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    animation: 'slide_from_right',
                    headerTransparent: true,
                    header: () => <AppLogo tag="named" className="w-28 h-28 self-center" />,
                }}>
                <AuthStack.Screen name="Login" component={LoginScreen} />
                <AuthStack.Screen name="Register" component={RegisterScreen} />
                <AuthStack.Screen name="Forgot-Password" component={ForgotPasswordScreen} />
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNavigation;
