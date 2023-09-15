import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { ContainerView, Feather, Input, Ionicons, RowView, SearchItem } from '../components';
import { useNavigation } from '@react-navigation/native';

const SearchScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <ContainerView>
            <Pressable onPress={() => navigation.goBack()}>
                <RowView>
                    <Ionicons name="arrow-back" size={32} />
                </RowView>
            </Pressable>
            <RowView className="mt-3 relative">
                <View className="absolute self-center mx-2">
                    <Feather name="search" size={28} />
                </View>
                <Input
                    autoFocus={true}
                    className="mt-1 self-center pl-12"
                    placeholder="Search...."
                />
            </RowView>
            <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </ScrollView>
        </ContainerView>
    );
};

export default SearchScreen;
