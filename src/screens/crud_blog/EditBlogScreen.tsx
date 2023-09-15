import React, { useContext } from 'react';
import { Image, Pressable, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
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
import { OverlayContext } from '../../contexts';

const EditBlogScreen: React.FC = () => {
    const navigation = useNavigation();
    const { openChooseImgSheet } = useContext(OverlayContext);
    const navigateScreenHandler = (screen: string) =>
        navigation.dispatch(CommonActions.navigate(screen));
    return (
        <ContainerView>
            <RowView className="justify-between border-b-2 border-gray-300 pb-2">
                <Pressable className="self-center" onPress={() => navigation.goBack()}>
                    <RowView>
                        <Ionicons name="arrow-back" size={28} />
                        <Text className="ml-2 self-center text-base font-poppins-semibold">
                            Edit Blog
                        </Text>
                    </RowView>
                </Pressable>
                <Button className="w-1/6 h-10 bg-success-normal">
                    <ButtonText className="text-sm">Save</ButtonText>
                </Button>
            </RowView>
            <Pressable className="mt-4" onPress={() => navigateScreenHandler('Profile')}>
                <RowView>
                    <Image
                        source={require('../../assets/images/avatar_placeholder.jpg')}
                        className="w-12 h-12 rounded-full"
                    />
                    <Text className="self-center ml-2 text-base font-poppins-semibold">Name</Text>
                </RowView>
            </Pressable>
            <View className="mt-4">
                <Input
                    className="h-64"
                    placeholder="What are you thinking about ?"
                    textAlignVertical="top"
                    multiline={true}
                />
            </View>
            <View className="mt-4 shadow-sm shadow-black">
                <Image
                    source={require('../../assets/images/thumbnail_placeholder.png')}
                    className="w-full h-64 "
                />
            </View>
            <Pressable
                className="mt-4 border-y-2 border-gray-300 py-2"
                onPress={() => openChooseImgSheet()}>
                <RowView>
                    <Feather name="image" size={36} />
                    <Text className="self-center ml-2 text-lg font-poppins-semibold">Images</Text>
                </RowView>
            </Pressable>
        </ContainerView>
    );
};

export default EditBlogScreen;
