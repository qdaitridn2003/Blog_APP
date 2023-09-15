import React, { useEffect, useState, useRef, useContext } from 'react';
import { View, Pressable, Image, Modal, TextInput } from 'react-native';
import { ContainerView, Text, RowView, Input, Feather, Button, ButtonText } from '../../components';
import { Colors, remainingTimeFormat } from '../../utils';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { OverlayContext } from '../../contexts';

const RegisterAccountScreen: React.FC = () => {
    const navigation = useNavigation();
    const { openAlert, setAlertMessage } = useContext(OverlayContext);
    const [isOpenConfirmEmailModal, setIsOpenConfirmEmailModal] = useState<boolean>(false);
    const [getOtpRemainingTime, setGetOtpRemainingTime] = useState(150000);
    const [isHidePassword, setIsHidePassword] = useState<boolean>(true);
    const [isHideConfirmPassword, setIsHideConfirmPassword] = useState<boolean>(true);
    const otpInputRef = useRef<TextInput>(null);

    const openConfirmEmailModal = () => setIsOpenConfirmEmailModal(true);
    const closeConfirmEmailModal = () => setIsOpenConfirmEmailModal(false);

    const resendOtpHandler = () => setGetOtpRemainingTime(150000);
    const navigateScreenHandler = (screen: string) =>
        navigation.dispatch(CommonActions.navigate(screen));
    const alertUpdatingFeatures = () => {
        openAlert();
        setAlertMessage('This feature is updating...');
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (getOtpRemainingTime !== 0) {
                setGetOtpRemainingTime(getOtpRemainingTime - 1000);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [getOtpRemainingTime]);

    return (
        <ContainerView className="mt-24">
            <Text className="uppercase font-poppins-semibold text-2xl tracking-widest">
                Sign Up
            </Text>
            <Text className="text-base">Create your account</Text>
            <View className="shadow-lg shadow-black bg-white rounded-xl mt-8 p-4">
                <Text className="w-1/3 py-1 self-center font-poppins-medium text-lg text-center uppercase border-b-2 border-gray-300">
                    Sign Up
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
                <RowView className="mt-4 relative">
                    <Input
                        className="self-center pr-12"
                        placeholder="Confirm password"
                        secureTextEntry={isHideConfirmPassword}
                    />
                    <Pressable
                        className="absolute self-center right-0 mx-2"
                        onPress={() => setIsHideConfirmPassword(!isHideConfirmPassword)}>
                        <Feather
                            name={isHideConfirmPassword ? 'eye' : 'eye-off'}
                            color={Colors.primary.normal}
                            size={28}
                        />
                    </Pressable>
                </RowView>

                <Button className="mt-4" onPress={() => openConfirmEmailModal()}>
                    <ButtonText>Sign Up</ButtonText>
                </Button>
                <RowView className="mt-4 self-center">
                    <Text className="text-base">Already have an account ?</Text>
                    <Text
                        className="text-primary-emphasis text-base underline ml-2"
                        onPress={() => navigateScreenHandler('Login')}>
                        Sign In
                    </Text>
                </RowView>
            </View>
            <Text className="text-base self-center mt-4">Or continue with</Text>
            <Button
                className="bg-neutral-200 mt-4 shadow-sm shadow-black"
                onPress={() => alertUpdatingFeatures()}>
                <RowView className="justify-center items-center">
                    <Image
                        source={require('../../assets/images/facebook.png')}
                        className="w-8 h-8"
                    />
                    <Text className="self-center ml-2 mt-1 uppercase text-base font-poppins-semibold">
                        Facebook
                    </Text>
                </RowView>
            </Button>
            <Button
                className="bg-neutral-200 mt-4 shadow-sm shadow-black"
                onPress={() => alertUpdatingFeatures()}>
                <RowView className="justify-center items-center">
                    <Image source={require('../../assets/images/google.png')} className="w-8 h-8" />
                    <Text className="self-center ml-2 mt-1 uppercase text-base font-poppins-semibold">
                        Google
                    </Text>
                </RowView>
            </Button>
            <Modal
                visible={isOpenConfirmEmailModal}
                animationType="fade"
                transparent={true}
                onRequestClose={() => closeConfirmEmailModal()}>
                <View className="w-full h-full justify-center items-center">
                    <Pressable
                        className="w-full h-full bg-slate-400 opacity-30"
                        onPress={() => closeConfirmEmailModal()}
                    />
                    <View className="w-full p-4 shadow-sm shadow-black bg-screen">
                        <RowView className="justify-between border-b-2 border-gray-300 pb-2">
                            <Text className="font-poppins-semibold tracking-widest text-xl self-center">
                                Confirm Email Address
                            </Text>
                            <Feather name="x" size={28} onPress={() => closeConfirmEmailModal()} />
                        </RowView>
                        <Text className="text-center mt-4 text-base font-poppins-medium">
                            We have sent the code to your email already registered. Please check it
                            and put your code
                        </Text>
                        <Text
                            className="text-center text-base font-poppins-medium text-primary-emphasis"
                            onPress={() => otpInputRef.current && otpInputRef.current.focus()}>
                            here
                        </Text>
                        <TextInput
                            ref={otpInputRef}
                            textAlignVertical="center"
                            multiline={true}
                            inputMode="numeric"
                            maxLength={6}
                            className="border-b-2 text-base text-center w-2/3 self-center border-gray-400 focus:border-primary-normal"
                            placeholder="• • • • • •"
                        />
                        <RowView className="mt-4 self-center">
                            <Text className="text-base font-poppins-medium">
                                You haven't received the code ?
                            </Text>
                            {getOtpRemainingTime === 0 ? (
                                <Text
                                    className="text-base ml-2 text-primary-emphasis underline"
                                    onPress={() => resendOtpHandler()}>
                                    Resend
                                </Text>
                            ) : (
                                <Text className="text-base ml-2 text-primary-emphasis underline">
                                    {remainingTimeFormat(getOtpRemainingTime)}
                                </Text>
                            )}
                        </RowView>
                        <Button
                            className="mt-4"
                            onPress={() => {
                                navigateScreenHandler('Profile');
                                closeConfirmEmailModal();
                            }}>
                            <ButtonText>Submit</ButtonText>
                        </Button>
                    </View>
                    <Pressable
                        className="w-full h-full bg-slate-400 opacity-30"
                        onPress={() => closeConfirmEmailModal()}
                    />
                </View>
            </Modal>
        </ContainerView>
    );
};

export default RegisterAccountScreen;
