import React, { useRef, useState, useEffect } from 'react';
import {
    Button,
    ButtonText,
    ContainerView,
    Feather,
    Input,
    Ionicons,
    RowView,
    Text,
} from '../../components';
import { Colors, remainingTimeFormat } from '../../utils';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Modal, Pressable, TextInput, View } from 'react-native';

const ConfirmResetPasswordScreen: React.FC = () => {
    const navigation = useNavigation();
    const [isOpenConfirmEmailModal, setIsOpenConfirmEmailModal] = useState<boolean>(false);
    const [getOtpRemainingTime, setGetOtpRemainingTime] = useState(150000);
    const otpInputRef = useRef<TextInput>(null);

    const openConfirmEmailModal = () => setIsOpenConfirmEmailModal(true);
    const closeConfirmEmailModal = () => setIsOpenConfirmEmailModal(false);
    const resendOtpHandler = () => setGetOtpRemainingTime(150000);
    const navigateScreenHandler = (screen: string) =>
        navigation.dispatch(CommonActions.navigate(screen));

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (getOtpRemainingTime !== 0) {
                setGetOtpRemainingTime(getOtpRemainingTime - 1000);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [getOtpRemainingTime]);
    return (
        <ContainerView className="mt-24 relative">
            <Text className="uppercase font-poppins-semibold text-2xl tracking-widest">
                Reset Password
            </Text>
            <Text className="text-base">Put your email which have registered account</Text>
            <Input className="mt-4" inputMode="email" placeholder="Username" />
            <Button
                className="w-1/3 absolute bottom-0 right-0 mb-4 mr-4"
                onPress={() => openConfirmEmailModal()}>
                <RowView className="self-center">
                    <ButtonText className="mr-2">Next</ButtonText>
                    <Ionicons name="arrow-forward" size={24} color={Colors.white} />
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
                                Confirm Reset Password
                            </Text>
                            <Feather name="x" size={28} onPress={() => closeConfirmEmailModal()} />
                        </RowView>
                        <Text className="text-center mt-4 text-base font-poppins-medium">
                            We have sent the code to your email to reset password. Please check it
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
                                navigateScreenHandler('Reset');
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

export default ConfirmResetPasswordScreen;
