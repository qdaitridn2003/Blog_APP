import React from 'react';
import { Image, View, Pressable } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ColView, RowView, Text } from '../../StyledComponent';
import { Fontisto } from '../../VectorIcon';
import { dateFormatAt } from '../../../utils';

const SearchItem: React.FC = () => {
    const navigation = useNavigation();
    const navigateScreenHandler = (screen: string) =>
        navigation.dispatch(CommonActions.navigate(screen));
    return (
        <Pressable onPress={() => navigateScreenHandler('Blog')}>
            <RowView className="bg-white shadow-sm shadow-black rounded-lg mb-4">
                <Image
                    source={require('../../../assets/images/thumbnail_placeholder.png')}
                    className="w-44 h-36 rounded-lg"
                />
                <ColView className="w-full self-center ml-2">
                    <Text className="w-1/2 pr-2" numberOfLines={4}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <RowView className="mt-2">
                        <View className="self-center">
                            <Fontisto name="earth" size={16} />
                        </View>
                        <Text className="ml-2 self-center">
                            {dateFormatAt(new Date(Date.now()))}
                        </Text>
                    </RowView>
                </ColView>
            </RowView>
        </Pressable>
    );
};

export default SearchItem;
