import { styled } from 'nativewind';
import { View, Text as RNText, Pressable, TextInput } from 'react-native';

export const ContainerView = styled(View, 'flex-1 py-3 px-4');
export const RowView = styled(View, 'flex-row');
export const ColView = styled(View, 'flex-col');
export const Text = styled(RNText, 'font-poppins text-sm');
export const Button = styled(
    Pressable,
    'w-full h-12 rounded bg-primary-normal justify-center item-center',
);
export const ButtonText = styled(
    Text,
    'font-poppins-semibold text-center text-white text-lg uppercase',
);
export const Input = styled(
    TextInput,
    'w-full h-14 text-sm font-poppins border-2 border-gray-400 rounded focus:border-primary-normal px-3',
);
