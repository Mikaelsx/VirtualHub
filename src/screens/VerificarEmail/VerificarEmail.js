import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { SubTitle } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { ButtonTitle } from "../../components/Button/style"
import { Button } from "../../components/Button/style"

import { Ionicons } from '@expo/vector-icons';
import { Linking } from "react-native"
import { ContentAccount, LinkAccount, LinkMedium } from "../../components/Link/style"

export const VerificarEmail = () => {
    return(
        <Container>
            <Ionicons name="arrow-back-circle-outline" size={30} color="#34898F" onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}} />

            <Logo source={require('../../assets/Logo.png')} />

            <Title>Verificar Email</Title>
            
            <ContentAccount>
            <SubTitle>Digite o código de 4 dígitos enviado para 
            </SubTitle>
            <LinkMedium onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>username@email.com</LinkMedium>
            </ContentAccount>

            <Input
            placeholder={'Usuário ou E-mail'}/>

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )
}