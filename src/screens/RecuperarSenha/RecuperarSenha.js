import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { SubTitle } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { ButtonTitle } from "../../components/Button/style"
import { Button } from "../../components/Button/style"

import { Ionicons } from '@expo/vector-icons';
import { Linking } from "react-native"

export const RecuperarSenha = () => {
    return(
        <Container>
            <Ionicons name="arrow-back-circle-outline" size={30} color="#34898F" onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}} />

            <Logo source={require('../../assets/Logo.png')} />

            <Title>Recuperar Senha</Title>

            <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>

            <Input
            placeholder={'Usuário ou E-mail'}/>

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )
}