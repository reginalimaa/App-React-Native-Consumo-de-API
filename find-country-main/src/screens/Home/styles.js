import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    align-items: center;
    background-color: #a39081;
    flex: 1;
    padding: 20px;
`;

export const Animation = styled(Animatable.View)`
    align-items: center;
    width: 100%;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 5px;
    color: #black;
    font-family: Roboto_500Medium;
    font-size: 16px;
    margin-top: 20px;
    padding: 8px 16px;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    background-color: #292522;
    border-radius: 5px;
    margin-top: 20px;
    padding: 8px;
    width: 100%;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-family: Roboto_500Medium;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const AddressArea = styled.View`
    align-items: center;
    margin-top: 15px;
`;

export const Text = styled.Text`
    color: #fff;
    font-family: Roboto_500Medium;
    font-size: 18px;
`;