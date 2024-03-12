import { ButtonSecondary } from "../../components/Button/style"
import { ButtonSecundaryTitle } from "../../components/ButtonTitle/style"
import { BoxRow, Container, Med, SubTitleBoxRow } from "../../components/Container/style"
import { InputPaciente, InputPaciente2 } from "../../components/Input/style"
import { UseMap } from "../../components/Logo/style"
import { Map } from "../../components/Map/Map"
import { Title, TitleConsulta, TitleInput } from "../../components/Title/style"



export const ConfirmarLocal = ({navigation}) => {
    return(
        <Container>
            <UseMap>
                <Map/>
            </UseMap>

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

            <ButtonSecondary onPress={ () => {navigation.replace("Perfil")}}>
              <ButtonSecundaryTitle>Voltar</ButtonSecundaryTitle>
            </ButtonSecondary>
            </Med>




        </Container>
    )
}