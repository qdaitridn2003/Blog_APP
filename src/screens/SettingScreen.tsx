import React from 'react';
import { Pressable, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {
    Button,
    ButtonText,
    ContainerView,
    Ionicons,
    MaterialIcons,
    RowView,
    Text,
} from '../components';

const CrudAccountScreen: React.FC = () => {
    const navigation = useNavigation();
    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };

    return (
        <ContainerView>
            <RowView className="justify-center">
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={32} />
                </Pressable>
                <Text className="self-center text-center flex-1 mt-1 text-base font-poppins-semibold uppercase">
                    Setting
                </Text>
                <View className="w-8 h-8" />
            </RowView>
            <Pressable
                className="bg-white p-4 shadow-sm shadow-black mt-4 rounded-lg"
                onPress={() => navigateScreenHandler('Change Password')}>
                <RowView className="justify-between">
                    <Text className="text-base font-poppins-semibold">Change Password</Text>
                    <MaterialIcons name="navigate-next" size={24} />
                </RowView>
            </Pressable>
            <Pressable
                className="bg-white p-4 shadow-sm shadow-black mt-4 rounded-lg"
                onPress={() => navigateScreenHandler('Deleted Blog')}>
                <RowView className="justify-between">
                    <Text className="text-base font-poppins-semibold">Deleted Blogs</Text>
                    <MaterialIcons name="navigate-next" size={24} />
                </RowView>
            </Pressable>
            <Button className="mt-4 bg-red-600">
                <ButtonText>Delete Account</ButtonText>
            </Button>
        </ContainerView>
    );
};

export default CrudAccountScreen;
