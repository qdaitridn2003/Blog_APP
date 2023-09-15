import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ConfirmResetPasswordScreen, ResetPasswordScreen } from '../screens';

const ForgotPasswordNavigation: React.FC = () => {
    const ForgotPasswordStack = createNativeStackNavigator();
    return (
        <ForgotPasswordStack.Navigator
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <ForgotPasswordStack.Screen name="Confirm" component={ConfirmResetPasswordScreen} />
            <ForgotPasswordStack.Screen name="Reset" component={ResetPasswordScreen} />
        </ForgotPasswordStack.Navigator>
    );
};

export default ForgotPasswordNavigation;
