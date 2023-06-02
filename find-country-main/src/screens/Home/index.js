import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    AddressArea,
    Text
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Home() {
    const [country, setCountry] = useState('');
    const [countryData, setCountryData] = useState(null);

    async function handleBuscar() {
        try {                                         
            const { status, data } = await api.get(`/name/${country}`);
            console.log(data)
            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Digite o nome de um país existente.');
            } else {
                countryData(data);
            }

        } catch (error) {
            Alert.alert('Buscar', 'Digite um nome válido, pode ser seu nome oficial ou comum');
        }
    };

    async function handleLimpar() {
        countryData(null);
        setCountry('');
    }

    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                {!countryData &&
                    <Input
                        keyboardType=''
                        maxLength={30}
                        onChangeText={setCountry}
                        onSubmitEditing={handleBuscar}
                        placeholder="Digite o país que deseja obter informações"
                        placeholderTextColor="black"
                        value={country}
                    />
                }

                <Button
                    activeOpacity={0.8}
                    onPress={countryData ? handleLimpar : handleBuscar}>
                    <ButtonText>
                        {countryData ? 'Limpar' : 'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>

            {countryData &&
                <AddressArea>
                    <Text>País: {country}</Text>
                    <Text>Nome oficial: {countryData[0].name.nativeName.por.official}</Text>
                    <Text>Capital: {countryData[0].capital}</Text>
                    <Text>Continentes: {countryData[0].continents}</Text>
                    <Text>Línguas: {countryData[0].languages.por}</Text>
                    <Text>População: {countryData[0].population}</Text>
                    <Text>Moedas: {countryData[0].currencies.BRL.name}</Text>
                    <Text>Bandeira: {countryData[0].flags.png}</Text>
                </AddressArea>  
            }
        </Container>
    );
}