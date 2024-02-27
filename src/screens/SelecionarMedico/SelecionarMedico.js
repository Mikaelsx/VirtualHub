import { Container } from "../../components/Container/style"
import { Box, Cal, CancPac, Con, LinkSelect, SelectMedical, SelectMedicalImage, TitleSelect, Tox } from "./style"
import { Viw } from "./style"
import { Div } from "./style"
import { Select } from "./style"    
import { TextC } from "./style"
import { TextCian } from "./style"
import { TitleCLin } from "./style"
import { TextYel } from "./style"

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Linking } from "react-native"
import { SubTitle, Title } from "../../components/Title/style"
import { LinkPaciente } from "../../components/Link/style"
import { ImagMedico } from "../../components/Logo/style"

export const SelecionarMedico = () => {
    return(
        <Container>
    
        <TitleSelect>Selecionar Medico</TitleSelect>
        
        <SelectMedical>
                <SelectMedicalImage source={require('../../assets/Doutor.png')}/>
            <Tox>
                <TitleCLin>Dra Alessandra</TitleCLin>
                <SubTitle>Demartologa, Esteticista</SubTitle>
            </Tox>
            <Box>
            </Box>
        </SelectMedical>

        <SelectMedical>
                <SelectMedicalImage source={require('../../assets/Doutor.png')}/>
            <Tox>
                <TitleCLin>Dra Alessandra</TitleCLin>
                <SubTitle>Demartologa, Esteticista</SubTitle>
            </Tox>
            <Box>
            </Box>
        </SelectMedical>
        
        <SelectMedical>
                <SelectMedicalImage source={require('../../assets/Doutor.png')}/>
            <Tox>
                <TitleCLin>Dra Alessandra</TitleCLin>
                <SubTitle>Demartologa, Esteticista</SubTitle>
            </Tox>
            <Box>
            </Box>
        </SelectMedical>


        <Button>
            <ButtonTitle>EDITAR</ButtonTitle>
        </Button>

            
        <LinkSelect onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Cancelar</LinkSelect>

    </Container>
    )
}