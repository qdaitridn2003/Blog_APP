import React, { useState, useRef } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';
import { ContainerView, Feather, Input, RowView, SearchItem, Text } from '../components';
import { CommonActions, useNavigation } from '@react-navigation/native';

const SearchScreen: React.FC = () => {
    const navigation = useNavigation();
    const [pagerViewIndex, setPagerViewIndex] = useState<number>(0);
    const pagerViewRef = useRef<PagerView>(null);
    const changePagerViewIndexHandler = (index: number) => {
        pagerViewRef.current?.setPage(index);
    };
    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };
    return (
        <ContainerView className="mt-24">
            <Text className="font-poppins-semibold text-2xl">Categories</Text>
            <RowView className="mt-3 relative">
                <View className="absolute self-center mx-2">
                    <Feather name="search" size={28} />
                </View>
                <Pressable
                    className="w-full"
                    onPress={() => {
                        navigateScreenHandler('Search');
                    }}>
                    <Input
                        editable={false}
                        className="self-center pl-12 mt-1"
                        placeholder="Search...."
                    />
                </Pressable>
            </RowView>
            <RowView className="mt-4">
                <Pressable onPress={() => changePagerViewIndexHandler(0)}>
                    {pagerViewIndex === 0 ? (
                        <Text className="text-base font-poppins-medium border-b-2 border-primary-normal pb-2">
                            Feature
                        </Text>
                    ) : (
                        <Text className="text-base">Feature</Text>
                    )}
                </Pressable>
                <Pressable className="ml-4" onPress={() => changePagerViewIndexHandler(1)}>
                    {pagerViewIndex === 1 ? (
                        <Text className="text-base font-poppins-medium border-b-2 border-primary-normal pb-2">
                            Latest
                        </Text>
                    ) : (
                        <Text className="text-base">Latest</Text>
                    )}
                </Pressable>
                <Pressable className="ml-4" onPress={() => changePagerViewIndexHandler(2)}>
                    {pagerViewIndex === 2 ? (
                        <Text className="text-base font-poppins-medium border-b-2 border-primary-normal pb-2">
                            Most Liked
                        </Text>
                    ) : (
                        <Text className="text-base">Most Liked</Text>
                    )}
                </Pressable>
            </RowView>
            <PagerView
                ref={pagerViewRef}
                className="mt-4 flex-1"
                onPageSelected={e => setPagerViewIndex(e.nativeEvent.position)}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </ScrollView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </ScrollView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </ScrollView>
            </PagerView>
        </ContainerView>
    );
};

export default SearchScreen;
