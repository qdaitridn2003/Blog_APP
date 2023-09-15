import React, { useContext, useState } from 'react';
import { Image, Pressable } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ColView, RowView, Text } from '../../StyledComponent';
import { dateFormatAt } from '../../../utils';
import { OverlayContext } from '../../../contexts';

const CommentItem: React.FC = () => {
    const navigation = useNavigation();
    const { openAlert, setAlertMessage } = useContext(OverlayContext);
    const [isTruncatedText, setIsTruncatedText] = useState<boolean>(true);
    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };

    const deleteCommentHandler = () => {
        openAlert();
        setAlertMessage('Do you want to delete this comment ?');
    };
    return (
        <ColView className="mb-4">
            <RowView>
                <Pressable onPress={() => navigateScreenHandler('Profile')}>
                    <Image
                        source={require('../../../assets/images/avatar_placeholder.jpg')}
                        className="w-12 h-12 rounded-full"
                    />
                </Pressable>
                <ColView className="ml-2 flex-1 bg-white shadow-sm shadow-black p-2 self-center rounded-lg">
                    <Text
                        className="text-base font-poppins-semibold"
                        onPress={() => navigateScreenHandler('Profile')}>
                        Name
                    </Text>
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
                </ColView>
            </RowView>
            <RowView className="mt-1 ml-16 justify-between">
                <Text className="capitalize">{dateFormatAt(new Date(Date.now()))}</Text>
                <RowView>
                    <Text
                        className="mr-4 text-primary-emphasis"
                        onPress={() => navigateScreenHandler('Edit Comment')}>
                        Edit
                    </Text>
                    <Text
                        className="mr-2 text-primary-emphasis"
                        onPress={() => deleteCommentHandler()}>
                        Delete
                    </Text>
                </RowView>
            </RowView>
        </ColView>
    );
};

export default CommentItem;
