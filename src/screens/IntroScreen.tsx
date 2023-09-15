import React, { useState, useRef, useContext } from 'react';
import { Pressable, View, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import {
    AppLogo,
    Button,
    ButtonText,
    ContainerView,
    Ionicons,
    Octicons,
    RowView,
    Text,
} from '../components';
import { Colors } from '../utils';
import { IntroContext } from '../contexts';

const IntroScreen: React.FC = () => {
    const { handleHideIntro } = useContext(IntroContext);
    const pagerViewRef = useRef<PagerView>(null);
    const [pagerViewIndex, setPagerViewIndex] = useState<number>(0);
    const handleSetPagerViewIndex = (index: number) => {
        if (pagerViewRef.current) {
            pagerViewRef.current.setPage(index);
        }
    };
    return (
        <ContainerView>
            <AppLogo tag="named" className="w-32 h-32 self-center" />
            <Pressable className="self-end" onPress={() => handleHideIntro()}>
                <RowView>
                    <Text className="self-center mr-2 text-base mt-0.5 font-poppins-semibold uppercase">
                        Skip
                    </Text>
                    <Ionicons name="arrow-forward" size={32} />
                </RowView>
            </Pressable>
            <PagerView
                className="flex-1"
                ref={pagerViewRef}
                initialPage={0}
                onPageSelected={e => setPagerViewIndex(e.nativeEvent.position)}>
                <View>
                    <Image
                        className="w-full h-80"
                        source={require('../assets/images/intro_1.png')}
                    />
                    <Text className="uppercase text-center font-poppins-semibold mt-4 text-2xl">
                        Friendly
                    </Text>
                    <Text className="mt-2 text-base text-center">
                        A handy tool for keeping your blog up-to-date on the go. It allows you to
                        create and edit posts and manage comments, all from your smartphone
                    </Text>
                </View>
                <View>
                    <Image
                        className="w-full h-80"
                        source={require('../assets/images/intro_2.png')}
                    />
                    <Text className="uppercase text-center font-poppins-semibold mt-4 text-2xl">
                        Memorably
                    </Text>
                    <Text className="mt-2 text-base text-center">
                        Memories are one of our precious things so this app can save those memories
                        and so on ...
                    </Text>
                </View>
                <View>
                    <Image
                        className="w-full h-80"
                        source={require('../assets/images/intro_3.png')}
                    />
                    <Text className="uppercase text-center font-poppins-semibold mt-4 text-2xl">
                        Securely
                    </Text>
                    <Text className="mt-2 text-base text-center">
                        Your information and your data will be safely in this app because it is very
                        important with you right ?
                    </Text>
                </View>
            </PagerView>
            <RowView className="mt-4 self-center">
                <Pressable
                    className="mx-2"
                    onPress={() => {
                        handleSetPagerViewIndex(0);
                    }}>
                    <Octicons
                        name={pagerViewIndex === 0 ? 'dot-fill' : 'dot'}
                        color={pagerViewIndex === 0 ? Colors.primary.normal : Colors.gray[400]}
                        size={24}
                    />
                </Pressable>
                <Pressable
                    className="mx-2"
                    onPress={() => {
                        handleSetPagerViewIndex(1);
                    }}>
                    <Octicons
                        name={pagerViewIndex === 1 ? 'dot-fill' : 'dot'}
                        color={pagerViewIndex === 1 ? Colors.primary.normal : Colors.gray[400]}
                        size={24}
                    />
                </Pressable>
                <Pressable
                    className="mx-2"
                    onPress={() => {
                        handleSetPagerViewIndex(2);
                    }}>
                    <Octicons
                        name={pagerViewIndex === 2 ? 'dot-fill' : 'dot'}
                        color={pagerViewIndex === 2 ? Colors.primary.normal : Colors.gray[400]}
                        size={24}
                    />
                </Pressable>
            </RowView>
            <Button
                className="mt-4"
                onPress={() => {
                    if (pagerViewIndex === 2) {
                        handleHideIntro();
                    } else {
                        handleSetPagerViewIndex(pagerViewIndex + 1);
                    }
                }}>
                <ButtonText>{pagerViewIndex === 2 ? 'Finish' : 'Continue'}</ButtonText>
            </Button>
        </ContainerView>
    );
};

export default IntroScreen;
