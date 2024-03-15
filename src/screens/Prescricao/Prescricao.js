// IMPORTS

import { ButtonPequeno } from "../../components/Button/style"
import { ButtonTitle } from "../../components/Button/style"
import { Container } from "../../components/Container/style"
import {  LineView } from "../../components/Container/style"
import { SafeInputBox } from "../../components/Container/style"
import { Scroll } from "../../components/Container/style"
import { InputPaciente } from "../../components/Input/style"
import { InputPacienteGrande } from "../../components/Input/style"
import { LinkPaciente } from "../../components/Link/style"
import { LinkRed } from "../../components/Link/style"
import { UseHeader } from "../../components/Logo/style"
import { SubTitle } from "../../components/Title/style"
import { SubTitleRow} from "../../components/Title/style"
import { Title } from "../../components/Title/style"
import { TitleInput } from "../../components/Title/style"

import { Linking } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react"
import { CameraModal } from "../Camera/CameraModal"

// import CameraModal from '../Camera/CameraModal'

// EXPORT

export const Prescricao = ({navigation}) => {
    const [photo, setPhoto] = useState( false )
    const [uriCameraCapture, setUriCameraCapture] = useState( false )
    const [showCameraModal, setShowCameraModal] = useState( false )

    // useEffect() => {}

    return(
        <Container>
            <UseHeader source={require('../../assets/Doutor.png')}/>

            <Title>Dr. Claudio</Title>

            <SubTitleRow>
            <SubTitle>Cliníco geral</SubTitle>
            <SubTitle>CRM-15286</SubTitle>
            </SubTitleRow>

            <Scroll>
            <SafeInputBox>
            <TitleInput>Descrição da consulta:</TitleInput>
            <InputPacienteGrande placeholder={'O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante'}/>
            </SafeInputBox>

            <SafeInputBox>
            <TitleInput>Diagnóstico do paciente:</TitleInput>
            <InputPaciente placeholder={'Infecção no ouvido'}/>
            </SafeInputBox>

            <SafeInputBox>
            <TitleInput>Prescrição médica:</TitleInput>
            <InputPacienteGrande placeholder={'Medicamento: Advil Dosagem: 50 mg Frequência: 3 vezes ao dia Duração: 3 dias'}/>
            </SafeInputBox>

            <SafeInputBox>
            <TitleInput>Exames médicos</TitleInput>
            {/* <InputPacienteGrande placeholder={photo}/> */}
            </SafeInputBox>

            <CameraModal
                visible={showCameraModal}
                setUriCameraCapture={setUriCameraCapture}
                // setShowCameraModal={setShowCameraModal}
                setShowModalCancel={setShowCameraModal}
            />

            <LineView>
            <ButtonPequeno onPress={ () => setShowCameraModal(true)}>
                <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                <ButtonTitle>Enviar</ButtonTitle>
            </ButtonPequeno>

            <LinkRed onPress={ () => {console.log(navigation); navigation.replace("Perfil")}}>Cancelar</LinkRed>
            </LineView>

            {/* LINHA */}

            <SafeInputBox>
            <InputPacienteGrande placeholder={'Resultado do exame de sangue : tudo normal'}/>
            </SafeInputBox>

            <LinkPaciente onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Voltar</LinkPaciente>
            </Scroll>
        </Container>
    )
}