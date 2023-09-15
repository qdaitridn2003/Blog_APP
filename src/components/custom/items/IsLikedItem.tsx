import React from 'react';
import { Image, Pressable } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { RowView, Text } from '../../StyledComponent';

const IsLikedItem: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            className="mb-4"
            onPress={() => navigation.dispatch(CommonActions.navigate('Profile'))}>
            <RowView>
                <Image
                    source={require('../../../assets/images/avatar_placeholder.jpg')}
                    className="w-12 h-12 rounded-full"
                />
                <Text className="ml-2 self-center text-base font-poppins-semibold">Name</Text>
            </RowView>
        </Pressable>
    );
};

export default IsLikedItem;
