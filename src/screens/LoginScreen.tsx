import React, { useState, useContext } from 'react';
import { View, Pressable, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Button, ButtonText, ContainerView, Feather, Input, RowView, Text } from '../components';
import { Colors } from '../utils';
import { AuthContext, OverlayContext } from '../contexts';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation();
    const { handleSignIn } = useContext(AuthContext);
    const { openAlert, setAlertMessage } = useContext(OverlayContext);
    const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
    const alertUpdatingFeatures = () => {
        openAlert();
        setAlertMessage('This feature is updating...');
    };
    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };
    return (
        <ContainerView className="mt-24">
            <Text className="uppercase font-poppins-semibold text-2xl tracking-widest">
                Sign In
            </Text>
            <Text className="text-base">Please sign in to continue</Text>
            <View className="shadow-lg shadow-black bg-white rounded-xl mt-8 p-4">
                <Text className="w-1/3 py-1 self-center font-poppins-medium text-lg text-center uppercase border-b-2 border-gray-300">
                    Sign In
                </Text>
                <Input className="mt-4" placeholder="Username" inputMode="email" />
                <RowView className="mt-4 relative">
                    <Input
                        className="self-center pr-12"
                        placeholder="Password"
                        secureTextEntry={isHidePassword}
                    />
                    <Pressable
                        className="absolute self-center right-0 mx-2"
                        onPress={() => setIsHidePassword(!isHidePassword)}>
                        <Feather
                            name={isHidePassword ? 'eye' : 'eye-off'}
                            color={Colors.primary.normal}
                            size={28}
                        />
                    </Pressable>
                </RowView>
                <Text
                    className="mt-4 text-primary-emphasis text-base underline text-right"
                    onPress={() => navigateScreenHandler('Forgot-Password')}>
                    Forgot Password
                </Text>
                <Button className="mt-4" onPress={() => handleSignIn()}>
                    <ButtonText>Sign In</ButtonText>
                </Button>
                <RowView className="mt-4 self-center">
                    <Text className="text-base">Don't have any account ?</Text>
                    <Text
                        className="text-primary-emphasis text-base underline ml-2"
                        onPress={() => navigateScreenHandler('Register')}>
                        Sign Up
                    </Text>
                </RowView>
            </View>
            <Text className="text-base self-center mt-4">Or continue with</Text>
            <Button
                className="bg-neutral-200 mt-4 shadow-sm shadow-black"
                onPress={() => alertUpdatingFeatures()}>
                <RowView className="justify-center items-center">
                    <Image source={require('../assets/images/facebook.png')} className="w-8 h-8" />
                    <Text className="self-center ml-2 mt-1 uppercase text-base font-poppins-semibold">
                        Facebook
                    </Text>
                </RowView>
            </Button>
            <Button
                className="bg-neutral-200 mt-4 shadow-sm shadow-black"
                onPress={() => alertUpdatingFeatures()}>
                <RowView className="justify-center items-center">
                    <Image source={require('../assets/images/google.png')} className="w-8 h-8" />
                    <Text className="self-center ml-2 mt-1 uppercase text-base font-poppins-semibold">
                        Google
                    </Text>
                </RowView>
            </Button>
        </ContainerView>
    );
};

export default LoginScreen;
