import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { AntDesign, CommentItem, Feather, Input, Ionicons, RowView, Text } from '../components';
import { Colors } from '../utils';
import { CommonActions, useNavigation } from '@react-navigation/native';

const CommentScreen: React.FC = () => {
    const navigation = useNavigation();
    const [isLiked, setLiked] = useState<boolean>(false);

    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };
    return (
        <View className="w-full h-full p-4 relative">
            <RowView className="border-b-2 border-gray-300 pb-4 justify-between">
                <RowView>
                    <Ionicons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
                    <Text
                        className="ml-2 mt-1 self-center text-base font-poppins-semibold"
                        onPress={() => navigateScreenHandler('List Liked')}>
                        0 Likes
                    </Text>
                </RowView>
                <Pressable
                    className="border-l-2 border-gray-300 self-center pl-2"
                    onPress={() => setLiked(!isLiked)}>
                    <AntDesign
                        name={isLiked ? 'like1' : 'like2'}
                        size={26}
                        color={isLiked ? Colors.primary.normal : Colors.gray[400]}
                    />
                </Pressable>
            </RowView>
            <ScrollView className="mt-4 mb-16" showsVerticalScrollIndicator={false}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </ScrollView>
            <View className="w-full absolute bottom-0 mx-4 mb-4">
                <RowView className="relative">
                    <Input className="pr-16" placeholder="Write your comment" multiline={true} />
                    <Pressable className="absolute right-0 self-center mx-4">
                        <Feather name="send" size={28} color={Colors.primary.normal} />
                    </Pressable>
                </RowView>
            </View>
        </View>
    );
};

export default CommentScreen;
