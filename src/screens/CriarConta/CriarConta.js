// IMPORTS

import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Title/style";
import { SubTitleBox } from "../../components/Title/style";
import { Input } from "../../components/Input/style";
import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/Button/style";
import { LinkAccount } from "../../components/Link/style";

import { Linking } from "react-native"

// EXPORT

export const CriarConta = ({ navigation }) => {
    return(
        <Container>

            <Logo source={require('../../assets/Logo.png')} />

            <Title>Criar conta</Title>

            <SubTitleBox>

            <SubTitle>Insira seu endereço de e-mail e senha</SubTitle>
            <SubTitle>para realizar seu cadastro.</SubTitle>

            </SubTitleBox>

            <Input placeholder={'Usuário ou E-mail'}/>

            <Input placeholder={'Senha'}/>

            <Input placeholder={'Confirmar Senha'}/>

            <Button>
                <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
            </Button>

            <LinkAccount onPress={ () => {navigation.replace("Login")}}>Cancelar</LinkAccount>
            
        </Container>
    )
}