import React, { useContext, useState, useRef } from 'react';
import { Pressable, View, Image, ScrollView } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import {
    AntDesign,
    BlogItem,
    Button,
    ContainerView,
    Feather,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
    RowView,
    Text,
} from '../components';
import { OverlayContext } from '../contexts';
import { Colors, dateFormat } from '../utils';

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();
    const [gender, setGender] = useState<string>('male');
    const scrollViewRef = useRef<ScrollView>(null);
    const { openChooseImgSheet } = useContext(OverlayContext);

    const autoScrollToTop = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    };

    const navigateScreenHandler = (screen: string) =>
        navigation.dispatch(CommonActions.navigate(screen));

    return (
        <ContainerView>
            <RowView className="justify-center">
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={32} />
                </Pressable>
                <Text className="self-center text-center flex-1 mt-1 text-base font-poppins-semibold uppercase">
                    Your profile
                </Text>
                <View className="w-8 h-8" />
            </RowView>
            <ScrollView className="mt-4" showsVerticalScrollIndicator={false} ref={scrollViewRef}>
                <View className="bg-white rounded-lg shadow-sm shadow-black p-4">
                    <View className="mt-4 self-center">
                        <Image
                            className="w-48 h-48 rounded-full"
                            source={require('../assets/images/avatar_placeholder.jpg')}
                        />
                        <Pressable
                            className="absolute bottom-0 right-0 bg-slate-500 p-2 rounded-full"
                            onPress={() => openChooseImgSheet()}>
                            <AntDesign name="edit" size={24} color={Colors.white} />
                        </Pressable>
                    </View>
                    <Text className="mt-4 text-center text-lg font-poppins-semibold">Name</Text>
                    <RowView className="justify-center mt-4">
                        <Button
                            className="w-1/2 h-10"
                            onPress={() => navigateScreenHandler('Edit Profile')}>
                            <RowView className="justify-center items-center">
                                <Feather name="edit-2" size={18} color={Colors.white} />
                                <Text className="ml-2 font-poppins-semibold text-white self-center">
                                    Edit your profile
                                </Text>
                            </RowView>
                        </Button>
                        <Button
                            className="w-1/6 ml-2 h-10 justify-center items-center"
                            onPress={() => navigateScreenHandler('Setting')}>
                            <Feather name="more-horizontal" size={24} color={Colors.white} />
                        </Button>
                    </RowView>
                    <Text className="mt-4 text-center pb-2 border-b-2 border-gray-400 rounded-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                    </Text>
                </View>
                <View className="mt-4 bg-white rounded-lg shadow-sm shadow-black p-4">
                    <Text className="font-poppins-semibold text-xl border-b-2 pb-2 border-gray-300">
                        Details
                    </Text>
                    <RowView className="mt-4">
                        <FontAwesome name="birthday-cake" size={24} />
                        <Text className="ml-4 self-center text-base mt-1 font-poppins-medium">
                            {dateFormat(new Date(Date.now()), 'strike')}
                        </Text>
                    </RowView>
                    <RowView className="mt-4">
                        <MaterialCommunityIcons
                            name={gender === 'male' ? 'gender-male' : 'gender-female'}
                            size={26}
                        />
                        <Text className="ml-4 self-center text-base mt-1 font-poppins-medium">
                            {gender === 'male' ? 'Male' : 'Female'}
                        </Text>
                    </RowView>
                    <Pressable className="mt-4">
                        <RowView>
                            <Feather name="more-horizontal" size={24} />
                            <Text className="ml-4 self-center text-base mt-0.5 font-poppins-medium">
                                See more details
                            </Text>
                        </RowView>
                    </Pressable>
                </View>
                <View className="mt-4 bg-white rounded-lg shadow-sm shadow-black p-4">
                    <Text className="font-poppins-semibold text-xl border-b-2 pb-2 border-gray-300">
                        Your Blogs
                    </Text>
                </View>
                <View className="mt-4">
                    <BlogItem scrollToTopHandler={autoScrollToTop} />
                    <BlogItem scrollToTopHandler={autoScrollToTop} />
                </View>
            </ScrollView>
        </ContainerView>
    );
};

export default ProfileScreen;
