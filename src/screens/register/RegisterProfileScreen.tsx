/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';
import { View, Pressable, ScrollView, Image } from 'react-native';
import {
    ContainerView,
    Input,
    Text,
    RowView,
    Feather,
    Button,
    ButtonText,
    AntDesign,
} from '../../components';
import { RadioButton } from 'react-native-paper';
import { Colors } from '../../utils';
import { dateFormat } from '../../utils';
import DatePicker from 'react-native-date-picker';
import { OverlayContext } from '../../contexts';
import { CommonActions, useNavigation } from '@react-navigation/native';

const RegisterProfileScreen: React.FC = () => {
    const navigation = useNavigation();
    const { openChooseImgSheet } = useContext(OverlayContext);
    const [isOpenDatePicker, setIsOpenDatePicker] = useState<boolean>(false);
    const [dob, setDob] = useState<Date>(new Date(Date.now()));
    const [gender, setGender] = useState<string>('');

    const openDatePicker = () => setIsOpenDatePicker(true);
    const closeDatePicker = () => setIsOpenDatePicker(false);
    const navigateScreenHandler = (screen: string) => {
        navigation.dispatch(CommonActions.navigate(screen));
    };
    return (
        <ContainerView className="mt-24 relative">
            <Text className="uppercase font-poppins-semibold text-2xl tracking-widest">
                Sign Up
            </Text>
            <Text className="text-base">Create your profile</Text>
            <ScrollView className="mb-20" showsVerticalScrollIndicator={false}>
                <RowView className="w-full mt-4 justify-between">
                    <Input className="w-[180px] mr-2" placeholder="First name" />
                    <Input className="w-[180px]" placeholder="Last name" />
                </RowView>
                <Input className="mt-4" placeholder="Sub name (optional)" />
                <View className="mt-4">
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
                <Pressable className="mt-4" onPress={() => openDatePicker()}>
                    <RowView className="relative">
                        <Pressable
                            className="absolute self-center mx-2"
                            onPress={() => openDatePicker()}>
                            <Feather name="calendar" size={28} color={Colors.primary.normal} />
                        </Pressable>
                        <Input
                            editable={false}
                            className="text-center font-poppins-semibold"
                            value={dateFormat(dob, 'strike')}
                        />
                    </RowView>
                </Pressable>
                <Input
                    className="mt-4 h-28"
                    multiline={true}
                    maxLength={120}
                    textAlignVertical="top"
                    placeholder="You can write more bio to everyone can know your self. Just write anything you want (optional)"
                />
                <View className="mt-4 self-center relative">
                    <Image
                        className="w-48 h-48 rounded-full"
                        source={require('../../assets/images/avatar_placeholder.jpg')}
                    />
                    <Pressable
                        className="absolute bottom-0 right-0 bg-slate-500 p-2 rounded-full"
                        onPress={() => openChooseImgSheet()}>
                        <AntDesign name="edit" size={24} color={Colors.white} />
                    </Pressable>
                </View>
            </ScrollView>
            <Button
                className="absolute bottom-0 mb-4 mr-4 right-0 justify-center items-center"
                onPress={() => navigateScreenHandler('Login')}>
                <ButtonText>Submit</ButtonText>
            </Button>
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

export default RegisterProfileScreen;
