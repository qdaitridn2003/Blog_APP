import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContainerView, DeletedBlogItem, Ionicons, RowView, Text } from '../../components';

const DeletedBlogScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <ContainerView>
            <Pressable
                className="border-b-2 border-gray-300 pb-2"
                onPress={() => navigation.goBack()}>
                <RowView>
                    <Ionicons name="arrow-back" size={28} />
                    <Text className="ml-2 self-center text-base font-poppins-semibold">
                        Deleted Blogs
                    </Text>
                </RowView>
            </Pressable>
            <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
                <DeletedBlogItem />
                <DeletedBlogItem />
                <DeletedBlogItem />
                <DeletedBlogItem />
            </ScrollView>
        </ContainerView>
    );
};

export default DeletedBlogScreen;
