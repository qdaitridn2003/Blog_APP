import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RegisterAccountScreen, RegisterProfileScreen } from '../screens';

const RegisterNavigation: React.FC = () => {
    const RegisterStack = createNativeStackNavigator();
    return (
        <RegisterStack.Navigator
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
            initialRouteName="Account">
            <RegisterStack.Screen name="Account" component={RegisterAccountScreen} />
            <RegisterStack.Screen name="Profile" component={RegisterProfileScreen} />
        </RegisterStack.Navigator>
    );
};

export default RegisterNavigation;
