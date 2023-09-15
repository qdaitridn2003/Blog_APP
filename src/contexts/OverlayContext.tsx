import React, { createContext, useState, useRef } from 'react';
import { Modal, Pressable, View, PanResponder, Animated } from 'react-native';
import { RowView, Text, Feather, ColView, MaterialIcons, Entypo } from '../components';
import { ChildrenProps } from '../types';

interface OverlayContextValues {
    openAlert: () => void;
    closeAlert: () => void;
    confirmHandler: (func: () => void) => void;
    setAlertMessage: React.Dispatch<React.SetStateAction<string | string[]>> | any;
    openChooseImgSheet: () => void;
    closeChooseImgSheet: () => void;
}

const OverlayContext = createContext<OverlayContextValues>({
    openAlert: () => {},
    closeAlert: () => {},
    confirmHandler: () => {},
    setAlertMessage: undefined,
    openChooseImgSheet: () => {},
    closeChooseImgSheet: () => {},
});

const OverlayProvider: React.FC<ChildrenProps> = props => {
    const [isOpenChooseImgSheet, setIsOpenChooseImgSheet] = useState(false);
    const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
    const [alertMessages, setAlertMessages] = useState<string | string[]>('');
    const openAlert = () => setIsOpenAlert(true);
    const closeAlert = () => setIsOpenAlert(false);
    const confirmHandler = (func: () => void) => {
        confirmHandlerRef.current = func;
    };
    const openChooseImgSheet = () => setIsOpenChooseImgSheet(true);
    const closeChooseImgSheet = () => {
        animatedValue.setValue(0);
        setIsOpenChooseImgSheet(false);
    };
    const confirmHandlerRef = useRef<() => void>();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {},
            onPanResponderMove: (event, gesture) => {
                if (gesture.dy > 30) {
                    closeChooseImgSheet();
                } else if (gesture.dy > 0) {
                    animatedValue.setValue(gesture.dy);
                }
            },
            onPanResponderRelease: () => {
                animatedValue.setValue(0);
            },
        }),
    ).current;

    const bottomSheetAnimation = {
        transform: [{ translateY: animatedValue }],
    };

    return (
        <OverlayContext.Provider
            value={{
                openAlert,
                closeAlert,
                confirmHandler,
                setAlertMessage: setAlertMessages,
                openChooseImgSheet,
                closeChooseImgSheet,
            }}>
            {props.children}
            <Modal
                animationType="fade"
                visible={isOpenAlert}
                transparent={true}
                onRequestClose={() => closeAlert()}>
                <View className="flex-1 justify-center items-center">
                    <Pressable
                        className="w-full h-full bg-slate-400 opacity-30"
                        onPress={() => closeAlert()}
                    />
                    <View className="w-full bg-screen p-4 shadow-sm shadow-black">
                        <RowView className="justify-between border-b-2 border-gray-300 pb-2">
                            <Text className="font-poppins-semibold tracking-widest text-xl self-center">
                                Notification
                            </Text>
                            <Feather name="x" size={28} onPress={() => closeAlert()} />
                        </RowView>
                        <View className="mt-4 px-2">
                            {typeof alertMessages === 'object' ? (
                                alertMessages.map((message, index) => (
                                    <Text className="text-base" key={index}>
                                        {message}
                                    </Text>
                                ))
                            ) : (
                                <Text className="text-base">{alertMessages}</Text>
                            )}
                        </View>
                        <RowView className="mt-4 border-t-2 pt-2 border-gray-300 w-full justify-end">
                            <Pressable className="mx-2 self-center" onPress={() => closeAlert()}>
                                <Text className="text-base font-poppins-semibold">Cancel</Text>
                            </Pressable>
                            <Pressable
                                className="bg-emerald-500 px-3 py-2 rounded mx-2"
                                onPress={() => {
                                    if (confirmHandlerRef.current) {
                                        confirmHandlerRef.current();
                                        closeAlert();
                                    } else {
                                        closeAlert();
                                    }
                                }}>
                                <Text className="text-white text-base font-poppins-semibold">
                                    Confirm
                                </Text>
                            </Pressable>
                        </RowView>
                    </View>
                    <Pressable
                        onPress={() => closeAlert()}
                        className="w-full h-full bg-slate-400 opacity-30"
                    />
                </View>
            </Modal>
            <Modal
                visible={isOpenChooseImgSheet}
                transparent={true}
                animationType="slide"
                onRequestClose={() => closeChooseImgSheet()}>
                <Animated.View
                    style={bottomSheetAnimation}
                    className="flex-1 justify-end items-center">
                    <Pressable
                        className="w-full h-full bg-slate-400 opacity-30"
                        onPress={() => closeChooseImgSheet()}
                    />
                    <View className="w-full h-52 bg-screen shadow-sm p-2 shadow-black">
                        <View
                            className="w-1/2 h-4 justify-center items-center self-center"
                            {...panResponder.panHandlers}>
                            <View className="bg-slate-400 w-1/3 h-2 rounded" />
                        </View>
                        <ColView className="mt-2">
                            <Text className="font-poppins-semibold uppercase w-1/2 tracking-widest border-b-2 pt-2 border-gray-300 text-xl pb-2 self-center">
                                Choose Photos
                            </Text>
                            <View className="w-full mt-4">
                                <Pressable className="pb-4">
                                    <RowView>
                                        <MaterialIcons name="photo-library" size={32} />
                                        <Text className="ml-2 self-center text-lg mt-1 font-poppins-semibold">
                                            Library
                                        </Text>
                                    </RowView>
                                </Pressable>
                                <Pressable className="border-t-2 pt-4 border-gray-300">
                                    <RowView>
                                        <Entypo name="camera" size={32} />
                                        <Text className="ml-2 self-center text-lg mt-1 font-poppins-semibold">
                                            Camera
                                        </Text>
                                    </RowView>
                                </Pressable>
                            </View>
                        </ColView>
                    </View>
                </Animated.View>
            </Modal>
        </OverlayContext.Provider>
    );
};

export { OverlayContext, OverlayProvider };
