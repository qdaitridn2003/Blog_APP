/* eslint-disable react/no-unstable-nested-components */
import React, { useContext, useState } from 'react';
import { Pressable, Image, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ColView, RowView, Text } from '../../StyledComponent';
import { AntDesign, Feather, Fontisto, Ionicons } from '../../VectorIcon';
import { Divider, Menu } from 'react-native-paper';
import { Colors, dateFormatAt } from '../../../utils';
import { OverlayContext } from '../../../contexts';

interface BlogItemProps {
    scrollToTopHandler?: () => void;
}

const BlogItem: React.FC<BlogItemProps> = props => {
    const navigate = useNavigation();
    const { openAlert, setAlertMessage } = useContext(OverlayContext);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isTruncatedText, setIsTruncatedText] = useState<boolean>(true);
    const [isLiked, setLiked] = useState<boolean>(false);

    const openMenu = () => setIsOpenMenu(true);
    const closeMenu = () => setIsOpenMenu(false);
    const navigateScreenHandler = (screen: string) => {
        navigate.dispatch(CommonActions.navigate(screen));
    };

    const deleteBlogHandler = () => {
        openAlert();
        setAlertMessage('Do you want to delete this blog?');
    };
    return (
        <Pressable
            className="bg-white shadow-sm shadow-black rounded-lg mb-4"
            onPress={() => navigateScreenHandler('Blog')}>
            <ColView>
                <RowView className="justify-between border-b-2 border-gray-300">
                    <Pressable
                        className="p-4"
                        onPress={() => {
                            if (props.scrollToTopHandler) {
                                props.scrollToTopHandler();
                            } else {
                                navigateScreenHandler('Profile');
                            }
                        }}>
                        <RowView>
                            <Image
                                className="w-12 h-12 rounded-full"
                                source={require('../../../assets/images/avatar_placeholder.jpg')}
                            />
                            <ColView className="self-center ml-2">
                                <Text className="font-poppins-semibold text-lg">Name</Text>
                                <RowView>
                                    <Ionicons name="earth" size={18} />
                                    <Text className="ml-1 text-gray-600">
                                        {dateFormatAt(new Date(Date.now()))}
                                    </Text>
                                </RowView>
                            </ColView>
                        </RowView>
                    </Pressable>
                    <View className="self-center">
                        <Menu
                            visible={isOpenMenu}
                            anchorPosition="bottom"
                            onDismiss={() => closeMenu()}
                            anchor={
                                <Feather
                                    name="more-vertical"
                                    size={28}
                                    onPress={() => openMenu()}
                                />
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
                                onPress={() => deleteBlogHandler()}
                                title="Delete"
                                leadingIcon={() => <AntDesign name="delete" size={24} />}
                            />
                        </Menu>
                    </View>
                </RowView>
                <View className="mt-4">
                    <Text className="px-4 text-base" numberOfLines={isTruncatedText ? 3 : 0}>
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
                        className="text-primary-emphasis pl-4 text-base"
                        onPress={() => setIsTruncatedText(!isTruncatedText)}>
                        {isTruncatedText ? 'Read more' : 'Read less'}
                    </Text>
                </View>
                <View className="mt-4 border-b-2 border-gray-300 pb-2">
                    <Image
                        source={require('../../../assets/images/thumbnail_placeholder.png')}
                        className="w-full h-64"
                    />
                    <RowView className="justify-evenly mt-4">
                        <Text
                            className="text-base"
                            onPress={() => navigateScreenHandler('List Liked')}>
                            0 Likes
                        </Text>
                        <Text
                            className="text-base"
                            onPress={() => navigateScreenHandler('Comment')}>
                            0 Comments
                        </Text>
                    </RowView>
                </View>
                <RowView className="mt-4 mb-4 justify-around">
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
                    <Pressable onPress={() => navigateScreenHandler('Blog')}>
                        <RowView>
                            <Fontisto name="share-a" size={24} />
                            <Text className="self-center ml-2 mt-0.5 text-base font-poppins-medium">
                                Share
                            </Text>
                        </RowView>
                    </Pressable>
                </RowView>
            </ColView>
        </Pressable>
    );
};

export default BlogItem;
