import { BoxRow, Container, Med, SubTitleBoxRow } from "../../components/Container/style"
import { InputPaciente, InputPaciente2 } from "../../components/Input/style"
import { UseMap } from "../../components/Logo/style"
import { Title, TitleConsulta, TitleInput } from "../../components/Title/style"



export const ConfirmarLocal = () => {
    return(
        <Container>
            <UseMap source={require('../../assets/Map.png')}/>

            <Med>

            <Title>Clínica Natureh</Title>
            <TitleConsulta>São Paulo, SP</TitleConsulta>

            <SubTitleBoxRow>
            <TitleInput>Endereço</TitleInput>
            </SubTitleBoxRow>

            <BoxRow>
            <InputPaciente placeholder={'Rua Vicenso Silva'}></InputPaciente>
            </BoxRow>

            <SubTitleBoxRow>
            <TitleInput>Numero</TitleInput>
            <TitleInput>Bairro</TitleInput>
            </SubTitleBoxRow>

            <BoxRow>
            <InputPaciente2 placeholder={'578'}></InputPaciente2>
            <InputPaciente2 placeholder={'Moema-SP'}></InputPaciente2>
            </BoxRow>

            </Med>



        </Container>
    )
}