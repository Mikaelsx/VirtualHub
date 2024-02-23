import { TouchableOpacity } from "react-native"
import { Container } from "../../components/Container/style"
import { Title } from "../../components/Title/style"
import { Cal } from "./style"
import { Viw } from "./style"
import { Div } from "./style"
import { Select } from "./style"
import { TextC } from "./style"
import { TextCian } from "./style"
import { TitleCLin } from "./style"
import { TextYel } from "./style"

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const ButtonSelectClinic = () => {
    return(
        <Container>
        <Title>Selecionar Clinica</Title>
    
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

    </Container>
    )
}