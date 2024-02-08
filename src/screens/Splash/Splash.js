import { Imag } from "../../components/Logo/style"
import { Container } from "../../components/Container/style"



export const Splash = () => {
    return(
        <Container>
            <Imag source={require('../../assets/Splash.png')}/>
        </Container>
    )
}