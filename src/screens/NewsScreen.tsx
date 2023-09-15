import React from 'react';
import { ScrollView, Image, Pressable, View } from 'react-native';
import { BlogItem, ContainerView, Input, Text, RowView, Entypo } from '../components';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Colors } from '../utils';

const NewsScreen: React.FC = () => {
    const navigation = useNavigation();
    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };
    return (
        <ContainerView className="mt-24">
            <RowView className="justify-between">
                <Text className="font-poppins-semibold text-2xl self-center">Recent Blogs</Text>
                <Pressable
                    className="bg-slate-500 rounded-full p-2"
                    onPress={() => navigateScreenHandler('Add Blog')}>
                    <Entypo name="plus" size={24} color={Colors.white} />
                </Pressable>
            </RowView>
            <RowView className="justify-between mt-4 bg-white shadow-sm shadow-black px-2 py-4 rounded-lg">
                <Pressable className="self-center" onPress={() => navigateScreenHandler('Profile')}>
                    <Image
                        source={require('../assets/images/avatar_placeholder.jpg')}
                        className="w-12 h-12 rounded-full"
                    />
                </Pressable>
                <Pressable className="w-5/6" onPress={() => navigateScreenHandler('Add Blog')}>
                    <RowView className="w-full relative">
                        <View className="absolute self-center mx-2 -mt-1">
                            <Entypo name="images" size={24} />
                        </View>
                        <Input
                            className="pl-10"
                            editable={false}
                            placeholder="What are you thinking ?"
                        />
                    </RowView>
                </Pressable>
            </RowView>
            <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </ScrollView>
        </ContainerView>
    );
};

export default NewsScreen;
