import React from 'react';
import { ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContainerView, Ionicons, IsLikedItem, RowView, Text } from '../components';

const ListLikedScreen = () => {
    const navigation = useNavigation();
    return (
        <ContainerView>
            <Pressable
                className="border-b-2 border-gray-300 pb-2"
                onPress={() => navigation.goBack()}>
                <RowView className="p-2">
                    <Ionicons name="arrow-back" size={28} />
                    <Text className="ml-2 self-center text-lg font-poppins-semibold">
                        People who liked it
                    </Text>
                </RowView>
            </Pressable>
            <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
                <IsLikedItem />
            </ScrollView>
        </ContainerView>
    );
};

export default ListLikedScreen;
