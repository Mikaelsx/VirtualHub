import { Container } from "../../components/Container/style"
import { Box, Cal, CancPac, Con, LinkSelect, SelectMedical, SelectMedicalImage, SpaceButton, TitleSelect, Tox } from "./style"
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

export const SelecionarMedico = ({navigation}) => {
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

        <SpaceButton></SpaceButton>

        <Button onPress={ () => {navigation.replace("SelecionarData")}}>
            <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

            
        <LinkSelect onPress={ () => {navigation.replace("SelecionarClinica")}}>Cancelar</LinkSelect>

    </Container>
    )
}