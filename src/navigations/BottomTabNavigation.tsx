/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CategoriesScreen, MoreScreen, NewsScreen, NoticeScreen } from '../screens';
import { Colors } from '../utils';
import { AntDesign, Feather, MaterialCommunityIcons, Octicons } from '../components';

const BottomTabNavigation: React.FC = () => {
    const BottomTab = createBottomTabNavigator();
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarStyle: { height: 100, borderTopLeftRadius: 48, borderTopRightRadius: 48 },
                headerShown: false,
                tabBarInactiveTintColor: Colors.gray[400],
                tabBarActiveTintColor: Colors.primary.normal,
                tabBarShowLabel: false,
                lazy: true,
                unmountOnBlur: true,
            }}>
            <BottomTab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <MaterialCommunityIcons
                                name="newspaper-variant-outline"
                                size={40}
                                color={color}
                            />
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Feather name="bookmark" size={36} color={color} />
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Notice"
                component={NoticeScreen}
                options={{
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <AntDesign name="notification" size={32} color={color} />
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Octicons name="three-bars" size={32} color={color} />
                        </View>
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigation;
