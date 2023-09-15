import React, { useState } from 'react';
import { Pressable } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../utils';

const ChangePasswordScreen: React.FC = () => {
    const navigation = useNavigation();
    const [isHideOldPassword, setIsHideOldPassword] = useState<boolean>(true);
    const [isHideNewPassword, setIsHideNewPassword] = useState<boolean>(true);
    const [isHideConfirmPassword, setIsHideConfirmPassword] = useState<boolean>(true);

    return (
        <ContainerView>
            <Pressable
                className="border-b-2 border-gray-300 pb-2"
                onPress={() => navigation.goBack()}>
                <RowView>
                    <Ionicons name="arrow-back" size={28} />
                    <Text className="ml-2 self-center text-base font-poppins-semibold">
                        Change Password
                    </Text>
                </RowView>
            </Pressable>
            <RowView className="mt-4 relative">
                <Input
                    className="self-center pr-12"
                    placeholder="Old password"
                    secureTextEntry={isHideOldPassword}
                />
                <Pressable
                    className="absolute self-center right-0 mx-2"
                    onPress={() => setIsHideOldPassword(!isHideOldPassword)}>
                    <Feather
                        name={isHideOldPassword ? 'eye' : 'eye-off'}
                        color={Colors.primary.normal}
                        size={28}
                    />
                </Pressable>
            </RowView>
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
            <Button className="mt-4">
                <ButtonText>Save</ButtonText>
            </Button>
        </ContainerView>
    );
};

export default ChangePasswordScreen;
