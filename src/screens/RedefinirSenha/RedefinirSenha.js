// IMPORTS

import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style";
import { SubTitle, Title } from "../../components/Title/style";
import { Input } from "../../components/Input/style";
import { Button, ButtonTitle } from "../../components/Button/style";

import { Linking } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Back from "../../components/Back/style"

// EXPORT

export const RedefinirSenha = ({ navigation }) => {
    return(
        <Container>

            <AntDesign style={Back.seta} name="closecircleo" size={30} color="#34898F" onPress={ () => {navigation.replace("Login")}}/>

            <Logo source={require('../../assets/Logo.png')} />

            <Title>Redefinir Senha</Title>

            <SubTitle>Insira e confirme a sua nova senha</SubTitle>

            <Input placeholder={'Nova Senha'}/>

            <Input placeholder={'Confirmar nova senha'}/>

            <Button>
                <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
            </Button>
            
        </Container>
    )
}