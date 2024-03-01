import { LinearGradient } from "expo-linear-gradient"
import { BoxCian, BoxRed, BoxRow, Container, ListaPaciente, SafeButtonBox, SubTitleBoxRow } from "../../components/Container/style"
import { ContainerPaciente } from "../../components/Container/style"
import { SafeInputBox } from "../../components/Container/style"
import { Scroll } from "../../components/Container/style"
import { Box, Case, HeaderMedico, ImagBoxPaciente, Sino } from "../../components/Logo/style"
import { HeaderBox } from "../../components/Logo/style"
import { ImagMedico } from "../../components/Logo/style"
import { SubTitle, TitleInput, TitleWhite } from "../../components/Title/style"
import { TitleConsulta } from "../../components/Title/style"
import { Title } from "../../components/Title/style"
import { TitleButton } from "../../components/Title/style"
import { Agenda, AgendaBlue, ButtonRetangleBlue, ButtonRetangleText, ButtonRetangleTextBLue, ButtonRetangleTextWhite, ButtonRetangleWhite } from "../../components/Button/style"
import { ButtonCircle } from "../../components/Button/style"
import { ButtonRow } from "../../components/Button/style"
import { Header } from "../../components/Header/Header"

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



import CalendarList from "../../components/Calendar/Calendar"
import { LinkRed } from "../../components/Link/style"


export const ConsultaPaciente = () => {
    return(
        // PAGE
        <Container>

            {/* HEADER */}
            <Header/>

            {/* CALENDAR */}
            <CalendarList></CalendarList>

            {/* INPUTS */}
            <ButtonRow>
                <ButtonRetangleBlue>
                    <ButtonRetangleTextWhite>Agendadas</ButtonRetangleTextWhite>
                </ButtonRetangleBlue>

                <ButtonRetangleWhite>
                    <ButtonRetangleTextBLue>Realizadas</ButtonRetangleTextBLue>
                </ButtonRetangleWhite>

                <ButtonRetangleWhite>
                    <ButtonRetangleTextBLue>Canceladas</ButtonRetangleTextBLue>
                </ButtonRetangleWhite>
            </ButtonRow>

            {/* SCROW - CONTAINER PACIENTES */}
            <Scroll>

            <ListaPaciente>

            <ContainerPaciente>
            <BoxRow>
            <ImagBoxPaciente source={require('../../assets/NiccoleSarga.png')}/>
            

            <SubTitleBoxRow>
            <TitleInput>Niccole Sarga</TitleInput>

            <BoxRow>
            <SubTitle>22 anos</SubTitle>
            <SubTitle> • </SubTitle>
            <SubTitle>Rotina</SubTitle>
            </BoxRow>

            <BoxRed>
            <BoxCian>
            <MaterialCommunityIcons name="clock" size={20} color="#49B3BA" />
            <TitleInput>14:00</TitleInput>
            </BoxCian>
            <LinkRed onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Cancelar</LinkRed>
            </BoxRed>
            </SubTitleBoxRow>
            
            </BoxRow>
            </ContainerPaciente>

            {/* 2 */}
            {/* <ContainerPaciente>
            <BoxRow>
            <ImagBoxPaciente source={require('../../assets/RichardKosta.png')}/>
            

            <SubTitleBoxRow>
            <TitleInput>Richard Kosta</TitleInput>

            <BoxRow>
            <SubTitle>28 anos</SubTitle>
            <SubTitle> • </SubTitle>
            <SubTitle>Urgência</SubTitle>
            </BoxRow>

            <BoxRed>
            <BoxCian>
            <MaterialCommunityIcons name="clock" size={20} color="#49B3BA" />
            <TitleInput>15:00</TitleInput>
            </BoxCian>
            <LinkRed onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Cancelar</LinkRed>
            </BoxRed>
            </SubTitleBoxRow>
            
            </BoxRow>
            </ContainerPaciente> */}

            </ListaPaciente>

            </Scroll>

            {/* SAFE AREA */}
            {/* <SafeButtonBox>
            <AgendaBlue>
            <MaterialCommunityIcons name="calendar-check" size={20} color="#607EC5" />
            <TitleButton>Agenda</TitleButton>
            </AgendaBlue>
            <Agenda>
            <FontAwesome5 name="hospital" size={20} color="#4E4B59" />
            </Agenda>
            <Agenda>
            <FontAwesome6 name="user-circle" size={20} color="#4E4B59" />
            </Agenda>

            {/* <Agenda/>
            <Agenda/> */}
            

            {/* </SafeButtonBox>
             */} 
             
        </Container>
    )
}