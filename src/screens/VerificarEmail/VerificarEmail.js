// IMPORTS

import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { SubTitle } from "../../components/Title/style"
import { SubTitleBox } from "../../components/Title/style"
import { InputBox } from "../../components/Input/style"
import { InputLine } from "../../components/Input/style"
import { ButtonTitle } from "../../components/Button/style"
import { Button } from "../../components/Button/style"
import { LinkAccount } from "../../components/Link/style"

import Back from "../../components/Back/style"
import { AntDesign } from '@expo/vector-icons';
import { Linking } from "react-native"
import { Link } from "@react-navigation/native"

export const VerificarEmail = () => {
    return(
        <Container>

            {/* TESTE DE LINK */}
            {/* <Link to={{ screen: 'Login', params: { id: 'jane' } }}>
            Go to Jane's profile
            </Link> */}

            <AntDesign style={Back.seta} name="closecircleo" size={30} color="#34898F" onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}/>

            <Logo source={require('../../assets/Logo.png')} />

            <Title>Verificar Email</Title>
            
            <SubTitleBox>

            <SubTitle>Digite o código de 4 dígitos enviado para </SubTitle>
            <LinkAccount onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>username@email.com</LinkAccount>

            </SubTitleBox>

            <InputBox>

            <InputLine maxLength={1} placeholder={'0'}/>
            <InputLine maxLength={1} placeholder={'0'}/>
            <InputLine maxLength={1} placeholder={'0'}/>
            <InputLine maxLength={1} placeholder={'0'}/>
            
            </InputBox>

            <Button>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>

            <LinkAccount onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Reenviar Código</LinkAccount>

        </Container>
    )
}