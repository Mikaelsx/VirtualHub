import { Linking } from "react-native"
import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { ContentAccount, LinkAccount, LinkMedium, TextAccount } from "../../components/Link/style"
import { Button, ButtonTitle, ButtonGoogle, ButtonTitleGoogle} from "../../components/Button/style"

import { AntDesign } from '@expo/vector-icons';

export const Login = () => {
    return(
        <Container>
            <Logo source={require('../../assets/Logo.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input
            placeholder={'Usuário ou E-mail'}/>

            <Input
            placeholder={'Senha'}
            />

            <LinkMedium onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Esqueceu sua senha?</LinkMedium>


            <Button>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>


            <ButtonGoogle>
                <AntDesign name="google" size={16} color="#496BBA" />
                <ButtonTitleGoogle >ENTRAR COM GOOGLE</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <LinkAccount onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>
            
        </Container>
    )
}