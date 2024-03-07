import { Modal } from "react-native";
import { SubTitle, SubTitleBlack, Title } from "../Title/style";
import { AgendarModal, ImageModal, ModalContent, ModalRetagle, PatientModal } from "../ShowModalAppointment/style";
import { ButtonSecundaryTitle, ButtonTitle } from "../ButtonTitle/style";
import { ButtonModal, ButtonSecondary } from "../Button/style";
import { BoxRow } from "../Container/style";
import { Appointment, FilterAppointment, MargT } from "../../screens/Home/style";
import { BtnListAppointment } from "../BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { BtnConsultaAppointment } from "../BtnConsultaAppointment/BtnConsultaAppointment";
import { Input } from "../Input/style";
import { BoxDiver, BoxFonts, BoxTit, ConfirmarModal, H1, H2, H3, ModalAgendConsul } from "./style";

import { ConfirmarMedicoModal } from "../ConfirmarMedicoModal/ConfirmarMedicoModal";

export const ConfirmarConsutaModal = ({navigation, visible, setShowModalCancel, ...rest }) => {
  // const [statusLista, setStatusLista] = useState("pendente");


    return(
      
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
          
        <ConfirmarModal>
          <ModalAgendConsul>

            <BoxTit>
              <Title>Agendar Consulta</Title>
              <H1>Consulte os dados selecionados</H1>
              <H1>para a sua consulta</H1>
            </BoxTit>

            <BoxFonts>

            <BoxDiver>
              <H2>Data da consulta</H2>
              <H3>1 de Novembro de 2023</H3>
            </BoxDiver>

            <BoxDiver>
              <H2>Médico(a) da consulta</H2>
              <H3>Dra Alessandra</H3>
              <H3>Demartologa, Esteticista</H3>
            </BoxDiver>

            <BoxDiver>
              <H2>Local da consulta</H2>
              <H3>São Paulo, SP</H3>
            </BoxDiver>

            <BoxDiver>
              <H2>Tipo da consulta</H2>
              <H3>Rotina</H3>
            </BoxDiver>

            </BoxFonts>
            

  
            {/* <MargT></MargT> */}
            {/* onPress={() => setConfConsultaModal(true)} */}
            <ButtonModal onPress={ () => {navigation.replace("Perfil")}}>
              <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>
  
            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
              <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
            </ButtonSecondary>


          </ModalAgendConsul>
        </ConfirmarModal>
      </Modal>
    )
}