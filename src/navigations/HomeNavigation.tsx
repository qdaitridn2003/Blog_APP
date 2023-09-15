/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    AddBlogScreen,
    BlogScreen,
    ChangePasswordScreen,
    CommentScreen,
    SettingScreen,
    EditBlogScreen,
    EditCommentScreen,
    EditProfileScreen,
    HomeScreen,
    ListLikedScreen,
    ProfileScreen,
    SearchScreen,
    DeletedBlogScreen,
} from '../screens';
import { AppLogo } from '../components';

const HomeNavigation: React.FC = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <HomeStack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    animation: 'slide_from_right',
                    headerTransparent: true,
                    header: () => <AppLogo tag="named" className="w-28 h-28 self-center" />,
                }}>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Group>
                    <HomeStack.Screen
                        options={{ headerShown: false }}
                        name="Profile"
                        component={ProfileScreen}
                    />
                    <HomeStack.Screen
                        options={{ headerShown: false }}
                        name="Edit Profile"
                        component={EditProfileScreen}
                    />
                </HomeStack.Group>
                <HomeStack.Group
                    screenOptions={{ animation: 'slide_from_bottom', headerShown: false }}>
                    <HomeStack.Screen
                        options={{ animation: 'fade_from_bottom' }}
                        name="Blog"
                        component={BlogScreen}
                    />
                    <HomeStack.Screen name="Add Blog" component={AddBlogScreen} />
                    <HomeStack.Screen name="Edit Blog" component={EditBlogScreen} />
                    <HomeStack.Screen
                        options={{ animation: 'slide_from_right' }}
                        name="Deleted Blog"
                        component={DeletedBlogScreen}
                    />
                </HomeStack.Group>
                <HomeStack.Group
                    screenOptions={{ animation: 'slide_from_bottom', headerShown: false }}>
                    <HomeStack.Screen name="Comment" component={CommentScreen} />
                    <HomeStack.Screen name="Edit Comment" component={EditCommentScreen} />
                </HomeStack.Group>
                <HomeStack.Group screenOptions={{ headerShown: false }}>
                    <HomeStack.Screen name="Setting" component={SettingScreen} />
                    <HomeStack.Screen name="Change Password" component={ChangePasswordScreen} />
                </HomeStack.Group>
                <HomeStack.Screen
                    options={{
                        animation: 'slide_from_bottom',
                        animationDuration: 300,
                        headerShown: false,
                    }}
                    name="List Liked"
                    component={ListLikedScreen}
                />
                <HomeStack.Screen
                    options={{
                        animation: 'slide_from_bottom',
                        animationDuration: 300,
                        headerShown: false,
                    }}
                    name="Search"
                    component={SearchScreen}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
};

export default HomeNavigation;
