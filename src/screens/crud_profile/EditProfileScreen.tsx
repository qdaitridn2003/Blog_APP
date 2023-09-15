/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { Image, Pressable, ScrollView, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {
    Button,
    ButtonText,
    ContainerView,
    Input,
    Ionicons,
    RowView,
    Text,
} from '../../components';
import { Colors, dateFormat } from '../../utils';
import DatePicker from 'react-native-date-picker';

const EditProfileScreen: React.FC = () => {
    const navigation = useNavigation();
    const [dob, setDob] = useState<Date>(new Date(Date.now()));
    const [gender, setGender] = useState<string>('male');
    const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);
    const bioInputRef = useRef<TextInput>(null);

    const openDatePicker = () => setIsOpenDatePicker(true);
    const closeDatePicker = () => setIsOpenDatePicker(false);
    const editBioHandler = () => {
        bioInputRef.current?.focus();
    };

    return (
        <ContainerView>
            <Pressable
                className="border-b-2 border-gray-300 pb-2"
                onPress={() => navigation.goBack()}>
                <RowView className="justify-between">
                    <RowView className="self-center">
                        <Ionicons name="arrow-back" size={32} />
                        <Text className="self-center ml-2 mt-0.5 text-base font-poppins-semibold uppercase">
                            Edit your profile
                        </Text>
                    </RowView>
                    <Button className="w-1/6 h-10 bg-success-normal self-center">
                        <ButtonText className="text-sm">Save</ButtonText>
                    </Button>
                </RowView>
            </Pressable>
            <ScrollView className="my-4" showsVerticalScrollIndicator={false}>
                <View className="border-b-2 border-gray-300 pb-2">
                    <RowView className="justify-between">
                        <Text className="text-lg font-poppins-semibold">Avatar</Text>
                        <Text className="text-base text-primary-normal self-center">Edit</Text>
                    </RowView>
                    <Image
                        source={require('../../assets/images/avatar_placeholder.jpg')}
                        className="w-32 h-32 self-center rounded-full my-2"
                    />
                </View>
                <View className="mt-4 border-b-2 border-gray-300 pb-2">
                    <Text className="text-lg font-poppins-semibold">Name</Text>
                    <RowView className="mt-4 justify-between">
                        <Input placeholder="First name" className="w-[180px]" />
                        <Input placeholder="Last name" className="w-[180px]" />
                    </RowView>
                    <Input placeholder="Sub name" className="mt-4 mb-2" />
                </View>
                <View className="mt-4 border-b-2 border-gray-300 pb-2">
                    <RowView className="justify-between">
                        <Text className="text-lg font-poppins-semibold">Bio</Text>
                        <Text
                            className="text-base text-primary-normal self-center"
                            onPress={() => editBioHandler()}>
                            Edit
                        </Text>
                    </RowView>
                    <Input
                        ref={bioInputRef}
                        multiline={true}
                        maxLength={120}
                        textAlignVertical="top"
                        className="h-20 my-2 border-0"
                        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book."
                    />
                </View>
                <View className="mt-4 border-b-2 border-gray-300 pb-2">
                    <Text className="text-lg font-poppins-semibold">Gender</Text>
                    <RadioButton.Group value={gender} onValueChange={value => setGender(value)}>
                        <RowView className="justify-evenly">
                            <RadioButton.Item
                                uncheckedColor={Colors.gray[400]}
                                color={Colors.primary.normal}
                                position="leading"
                                labelStyle={{ fontFamily: 'Poppins-Medium', fontSize: 16 }}
                                label="Male"
                                value="male"
                            />
                            <RadioButton.Item
                                position="leading"
                                uncheckedColor={Colors.gray[400]}
                                color={Colors.primary.normal}
                                labelStyle={{ fontFamily: 'Poppins-Medium', fontSize: 16 }}
                                label="Female"
                                value="female"
                            />
                        </RowView>
                    </RadioButton.Group>
                </View>
                <View className="mt-4 border-b-2 border-gray-300 pb-2">
                    <RowView className="justify-between">
                        <Text className="text-lg font-poppins-semibold">Birthday</Text>
                        <Text
                            className="text-base text-primary-normal self-center"
                            onPress={() => openDatePicker()}>
                            Edit
                        </Text>
                    </RowView>
                    <Text className="text-center text-base font-poppins-semibold my-2">
                        {dateFormat(dob, 'strike')}
                    </Text>
                </View>
            </ScrollView>
            <DatePicker
                modal={true}
                open={isOpenDatePicker}
                date={dob}
                mode="date"
                title="Select Your Date Of Birth"
                minimumDate={new Date('1900-01-01')}
                maximumDate={new Date(Date.now())}
                onConfirm={date => {
                    setDob(date);
                    closeDatePicker();
                }}
                onCancel={() => closeDatePicker()}
            />
        </ContainerView>
    );
};

export default EditProfileScreen;
