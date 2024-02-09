// IMPORTS

import { Container  } from "../../components/Container/style"
import { SafeInputBox } from "../../components/Container/style"
import { Scroll } from "../../components/Container/style"
import { UseHeader } from "../../components/Logo/style"
import { InputPacienteGrande } from "../../components/Input/style"
import { InputPaciente } from "../../components/Input/style"
import { TitleInput } from "../../components/Title/style"
import { SubTitle } from "../../components/Title/style"
import { SubTitleRow } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/Button/style"
import { LinkPaciente } from "../../components/Link/style"

import { Linking } from "react-native"

//EXPORT

export const Prontuario = () => {
    return(
        <Container>
        
        {/* IMAGEM DO PACIENTE */}
            <UseHeader source={require('../../assets/Paciente.png')}></UseHeader>

        {/* CAIXA QUE CONTEM A IDADE E O EMAIL */}
            <SubTitleRow>

            <SubTitle>22 anos</SubTitle>

            <SubTitle>richard.kosta@gmail.com</SubTitle>

            </SubTitleRow>
        
        {/* BARRA DE ROLAGEM DE TELA */}

            <Scroll>

        {/* INPUTS */}

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


        {/* BOTÕES */}

            <Button>
                <ButtonTitle>SALVAR</ButtonTitle>
            </Button>

            <Button>
                <ButtonTitle>EDITAR</ButtonTitle>
            </Button>

            
            <LinkPaciente onPress={ () => {Linking.openURL('https://cursos.alura.com.br/forum/topico-botao-com-link-externo-205828')}}>Cancelar</LinkPaciente>

            </Scroll>

        </Container>
    )
}