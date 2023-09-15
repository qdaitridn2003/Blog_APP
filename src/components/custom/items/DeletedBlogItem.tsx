import React from 'react';
import { Image, View } from 'react-native';
import { ColView, RowView, Text } from '../../StyledComponent';
import { Fontisto } from '../../VectorIcon';
import { dateFormatAt } from '../../../utils';

const DeletedBlogItem: React.FC = () => {
    return (
        <View className="mb-4">
            <RowView className="bg-white shadow-sm shadow-black rounded-lg">
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
            <RowView className="mt-1 justify-end">
                <Text className="mr-4 text-primary-emphasis">Restore</Text>
                <Text className="mr-2 text-primary-emphasis">Delete</Text>
            </RowView>
        </View>
    );
};

export default DeletedBlogItem;
