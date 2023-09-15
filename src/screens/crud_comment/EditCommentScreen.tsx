import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    ButtonText,
    ContainerView,
    Ionicons,
    RowView,
    Text,
    Button,
    Input,
} from '../../components';
import { Pressable, View, Image } from 'react-native';

const EditCommentScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <ContainerView>
            <RowView className="justify-between border-b-2 border-gray-300 pb-2">
                <Pressable className="self-center" onPress={() => navigation.goBack()}>
                    <RowView>
                        <Ionicons name="arrow-back" size={28} />
                        <Text className="ml-2 self-center text-base font-poppins-semibold">
                            Edit Comment
                        </Text>
                    </RowView>
                </Pressable>
                <Button className="w-1/6 h-10 bg-success-normal">
                    <ButtonText className="text-sm">Save</ButtonText>
                </Button>
            </RowView>
            <RowView className="mt-4 justify-between">
                <Pressable>
                    <Image
                        source={require('../../assets/images/avatar_placeholder.jpg')}
                        className="w-12 h-12 rounded-full"
                    />
                </Pressable>
                <View className="ml-2 w-5/6">
                    <Input
                        className=""
                        placeholder="Write your comment"
                        textAlignVertical="top"
                        multiline={true}
                    />
                </View>
            </RowView>
        </ContainerView>
    );
};

export default EditCommentScreen;
