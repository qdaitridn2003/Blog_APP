/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { Divider, Menu } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, Fontisto, Ionicons, RowView, Text } from '../components';
import { Colors, dateFormatAt } from '../utils';
import { OverlayContext } from '../contexts';

const BlogScreen: React.FC = () => {
    const navigation = useNavigation();
    const { openAlert, setAlertMessage } = useContext(OverlayContext);
    const [isTruncatedText, setIsTruncatedText] = useState<boolean>(true);
    const [isLiked, setLiked] = useState<boolean>(false);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const openMenu = () => setIsOpenMenu(true);
    const closeMenu = () => setIsOpenMenu(false);

    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };

    const deleteBlogHandler = () => {
        openAlert();
        setAlertMessage('Do you want to delete this blog?');
    };
    return (
        <View className="w-full h-full relative">
            <RowView className="p-4 justify-between top-0">
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} />
                </Pressable>
                <View className="self-center">
                    <Menu
                        visible={isOpenMenu}
                        anchorPosition="bottom"
                        onDismiss={() => closeMenu()}
                        anchor={
                            <Feather name="more-vertical" size={28} onPress={() => openMenu()} />
                        }>
                        <Menu.Item
                            title="Edit"
                            onPress={() => {
                                navigateScreenHandler('Edit Blog');
                                closeMenu();
                            }}
                            leadingIcon={() => <Feather name="edit" size={24} />}
                        />
                        <Divider />
                        <Menu.Item
                            title="Delete"
                            onPress={() => deleteBlogHandler()}
                            leadingIcon={() => <AntDesign name="delete" size={24} />}
                        />
                    </Menu>
                </View>
            </RowView>
            <Image
                source={require('../assets/images/thumbnail_placeholder.png')}
                className="w-full h-72 absolute top-1/4"
            />
            <View className=" bg-transparent absolute bottom-0 p-4 w-full max-h-80">
                <Text
                    className="text-lg font-poppins-semibold"
                    onPress={() => navigateScreenHandler('Profile')}>
                    Name
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text numberOfLines={isTruncatedText ? 3 : 0}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Text
                        className="text-primary-emphasis text-base"
                        onPress={() => setIsTruncatedText(!isTruncatedText)}>
                        {isTruncatedText ? 'Read more' : 'Read less'}
                    </Text>
                </ScrollView>
                <Text className="mt-4 text-gray-400">{dateFormatAt(new Date(Date.now()))}</Text>
                <RowView className="mt-4 justify-between border-b-2 border-gray-300 pb-2">
                    <Text onPress={() => navigateScreenHandler('List Liked')}>0 Likes</Text>
                    <Text onPress={() => navigateScreenHandler('Comment')}>0 Comments</Text>
                </RowView>
                <RowView className="mt-4 justify-around">
                    <Pressable onPress={() => setLiked(!isLiked)}>
                        <RowView>
                            <AntDesign
                                name={isLiked ? 'like1' : 'like2'}
                                size={26}
                                color={isLiked ? Colors.primary.normal : Colors.gray[400]}
                            />
                            <Text
                                style={{ color: isLiked ? Colors.primary.normal : undefined }}
                                className="self-center ml-2 mt-1 text-base font-poppins-medium">
                                Like
                            </Text>
                        </RowView>
                    </Pressable>
                    <Pressable onPress={() => navigateScreenHandler('Comment')}>
                        <RowView>
                            <Fontisto name="comments" size={24} />
                            <Text className="self-center ml-2 mt-0.5 text-base font-poppins-medium">
                                Comment
                            </Text>
                        </RowView>
                    </Pressable>
                    <Pressable>
                        <RowView>
                            <Fontisto name="share-a" size={24} />
                            <Text className="self-center ml-2 mt-0.5 text-base font-poppins-medium">
                                Share
                            </Text>
                        </RowView>
                    </Pressable>
                </RowView>
            </View>
        </View>
    );
};

export default BlogScreen;
