import React, { useState } from 'react';
import { ContainerView, Text, RowView, Input, Feather, Button, ButtonText } from '../../components';
import { Colors } from '../../utils';
import { Pressable } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

const ResetPasswordScreen: React.FC = () => {
    const navigation = useNavigation();
    const [isHideNewPassword, setIsHideNewPassword] = useState<boolean>(true);
    const [isHideConfirmPassword, setIsHideConfirmPassword] = useState<boolean>(true);
    return (
        <ContainerView className="mt-24 relative">
            <Text className="uppercase font-poppins-semibold text-2xl tracking-widest">
                Reset Password
            </Text>
            <Text className="text-base">Put your new password there</Text>
            <RowView className="mt-4 relative">
                <Input
                    className="self-center pr-12"
                    placeholder="New password"
                    secureTextEntry={isHideNewPassword}
                />
                <Pressable
                    className="absolute self-center right-0 mx-2"
                    onPress={() => setIsHideNewPassword(!isHideNewPassword)}>
                    <Feather
                        name={isHideNewPassword ? 'eye' : 'eye-off'}
                        color={Colors.primary.normal}
                        size={28}
                    />
                </Pressable>
            </RowView>
            <RowView className="mt-4 relative">
                <Input
                    className="self-center pr-12"
                    placeholder="Confirm new password"
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
            <Button
                className="absolute bottom-0 mb-4 mx-4"
                onPress={() => navigation.dispatch(CommonActions.navigate('Login'))}>
                <ButtonText>Submit</ButtonText>
            </Button>
        </ContainerView>
    );
};

export default ResetPasswordScreen;
