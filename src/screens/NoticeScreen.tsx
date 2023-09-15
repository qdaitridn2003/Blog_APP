import React from 'react';
import { ContainerView, Text } from '../components';

const NoticeScreen: React.FC = () => {
    return (
        <ContainerView className="mt-24">
            <Text className="font-poppins-semibold text-2xl">Notifications</Text>
            <Text>This feature is updating....</Text>
        </ContainerView>
    );
};

export default NoticeScreen;
