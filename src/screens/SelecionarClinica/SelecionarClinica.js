import { TouchableOpacity } from "react-native"
import { Container } from "../../components/Container/style"
import { Title } from "../../components/Title/style"
import { Cal, CancPac, TitleSelect } from "./style"
import { Viw } from "./style"
import { Div } from "./style"
import { Select } from "./style"
import { TextC } from "./style"
import { TextCian } from "./style"
import { TitleCLin } from "./style"
import { TextYel } from "./style"

// import { LinkPaciente } from "../Link/style"

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { SpaceButton } from "../../screens/SelecionarMedico/style";
import { Main } from "../Main/Main"

export const SelecionarClinica = ({navigation}) => {
    return(
        <Container>
        <TitleSelect>Selecionar Clinica</TitleSelect>
    
        <Select>
            <Div>
                <TitleCLin>Clinica A</TitleCLin>
                <Viw>
                <AntDesign name="star" size={14} color="#F9A620" />
                <TextYel>4,5</TextYel>
                </Viw>
            </Div>

            <Div>
                <TextC>São Paulo, SP</TextC>
                <Cal>
                    <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                    <TextCian>Seg-Sab</TextCian>
                </Cal>
            </Div>
        </Select>

        <Select>
            <Div>
                <TitleCLin>Clinica A</TitleCLin>
                <Viw>
                <AntDesign name="star" size={14} color="#F9A620" />
                <TextYel>4,5</TextYel>
                </Viw>
            </Div>

            <Div>
                <TextC>São Paulo, SP</TextC>
                <Cal>
                    <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                    <TextCian>Seg-Sab</TextCian>
                </Cal>
            </Div>
        </Select>

        <Select>
            <Div>
                <TitleCLin>Clinica A</TitleCLin>
                <Viw>
                <AntDesign name="star" size={14} color="#F9A620" />
                <TextYel>4,5</TextYel>
                </Viw>
            </Div>

            <Div>
                <TextC>São Paulo, SP</TextC>
                <Cal>
                    <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                    <TextCian>Seg-Sab</TextCian>
                </Cal>
            </Div>
        </Select>

        <Select>
            <Div>
                <TitleCLin>Clinica A</TitleCLin>
                <Viw>
                <AntDesign name="star" size={14} color="#F9A620" />
                <TextYel>4,5</TextYel>
                </Viw>
            </Div>

            <Div>
                <TextC>São Paulo, SP</TextC>
                <Cal>
                    <MaterialCommunityIcons name="calendar-outline" size={14} color="#49B3BA" />
                    <TextCian>Seg-Sab</TextCian>
                </Cal>
            </Div>
        </Select>

        <SpaceButton></SpaceButton>

        <Button onPress={ () => {navigation.replace("SelecionarMedico")}}>
            <ButtonTitle>Continuar</ButtonTitle>
        </Button>

            
        <CancPac onPress={ () => {navigation.replace("Main")}}>Cancelar</CancPac>

    </Container>
    )
}