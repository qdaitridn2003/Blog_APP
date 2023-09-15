import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView } from 'react-native';
import {
    ContainerView,
    Text,
    RowView,
    Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
    Entypo,
    MaterialIcons,
    Button,
    ButtonText,
} from '../components';
import { Colors } from '../utils';
import { Switch } from 'react-native-paper';
import { AuthContext, OverlayContext } from '../contexts';
import { CommonActions, useNavigation } from '@react-navigation/native';

const MoreScreen: React.FC = () => {
    const navigation = useNavigation();
    const { handleSignOut } = useContext(AuthContext);
    const { openAlert, setAlertMessage, confirmHandler } = useContext(OverlayContext);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };
    const signOutHandler = () => {
        openAlert();
        setAlertMessage('Do you want to sign out ?');
        confirmHandler(handleSignOut);
    };
    return (
        <ContainerView className="mt-24">
            <RowView className="justify-between">
                <Text className="font-poppins-semibold text-2xl self-center">Menu</Text>
                <RowView>
                    <Pressable
                        className="bg-slate-500 rounded-full p-2 mr-2"
                        onPress={() => navigateScreenHandler('Setting')}>
                        <Ionicons name="settings-sharp" size={24} color={Colors.white} />
                    </Pressable>
                    <Pressable
                        className="bg-slate-500 rounded-full p-2 ml-2"
                        onPress={() => navigateScreenHandler('Search')}>
                        <FontAwesome name="search" size={24} color={Colors.white} />
                    </Pressable>
                </RowView>
            </RowView>
            <ScrollView className="pb-2 mt-4" showsVerticalScrollIndicator={false}>
                <Pressable
                    className="w-full p-4 bg-white rounded-xl shadow-sm shadow-black mt-4"
                    onPress={() => navigateScreenHandler('Profile')}>
                    <RowView>
                        <Image
                            className="w-12 h-12 rounded-full"
                            source={require('../assets/images/avatar_placeholder.jpg')}
                        />
                        <Text className="ml-2 self-center font-poppins-semibold text-lg">Name</Text>
                    </RowView>
                </Pressable>

                <Pressable className="w-full p-4 bg-white rounded-xl shadow-sm shadow-black mt-4">
                    <RowView>
                        <MaterialCommunityIcons name="security" size={24} />
                        <Text className="ml-2 mt-0.5 self-center font-poppins-medium uppercase text-base">
                            Policies & Agreements
                        </Text>
                    </RowView>
                </Pressable>

                <Pressable className="w-full p-4 bg-white rounded-xl shadow-sm shadow-black mt-4">
                    <RowView>
                        <Entypo name="info" size={22} />
                        <Text className="ml-2 mt-0.5 self-center font-poppins-medium uppercase text-base">
                            App Infomation
                        </Text>
                    </RowView>
                </Pressable>

                <Pressable className="w-full p-4 bg-white rounded-xl shadow-sm shadow-black mt-4">
                    <RowView>
                        <FontAwesome name="support" size={26} />
                        <Text className="ml-2 self-center mt-0.5 font-poppins-medium uppercase text-base">
                            Supports
                        </Text>
                    </RowView>
                </Pressable>

                <Pressable className="w-full p-4 bg-white rounded-xl shadow-sm shadow-black mt-4">
                    <RowView>
                        <MaterialIcons name="feedback" size={26} />
                        <Text className="ml-2 self-center mt-0.5 font-poppins-medium uppercase text-base">
                            Feedback
                        </Text>
                    </RowView>
                </Pressable>

                <RowView className="w-full p-4 bg-white rounded-xl shadow-sm shadow-black mt-4 justify-between">
                    <RowView>
                        <MaterialIcons name="dark-mode" size={26} />
                        <Text className="ml-2 self-center mt-0.5 font-poppins-medium uppercase text-base">
                            Dark Theme
                        </Text>
                    </RowView>
                    <Switch
                        thumbColor={Colors.neutral[100]}
                        trackColor={{ false: Colors.gray[400], true: Colors.primary.normal }}
                        value={isDarkTheme}
                        onChange={() => setIsDarkTheme(!isDarkTheme)}
                    />
                </RowView>
                <Text className="mt-4 text-base text-center font-poppins-medium text-gray-400">
                    Version 1.0.0 Alpha
                </Text>
                <Button
                    className="mt-4 bg-danger-normal shadow-sm shadow-black"
                    onPress={() => signOutHandler()}>
                    <ButtonText>Sign Out</ButtonText>
                </Button>
            </ScrollView>
        </ContainerView>
    );
};

export default MoreScreen;
