import { Modal } from "react-native";
import { SubTitle, SubTitleBlack, SubTitleRow, Title } from "../Title/style";
import { AgendarModal, ImageModal, ModalContent, ModalRetagle, PatientModal } from "../ShowModalAppointment/style";
import { ButtonSecundaryTitle, ButtonTitle } from "../ButtonTitle/style";
import { ButtonModal, ButtonSecondary } from "../Button/style";
import { BoxRow } from "../Container/style";
import { Appointment, FilterAppointment, MargT } from "../../screens/Home/style";
import { BtnListAppointment } from "../BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { BtnConsultaAppointment } from "../BtnConsultaAppointment/BtnConsultaAppointment";
import { Input } from "../Input/style";
import { BoxDiver, BoxFonts, BoxTit, ConfirmarModal, H1, H2, H3, ImageMedicalModal, ModalAgendConsul } from "./style";
import { UseHeader } from "../Logo/style";

export const ConfirmarMedicoModal = ({navigation, visible, setShowModalCancel, ...rest }) => {

    return(
      
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
          
        <ConfirmarModal>
          <ModalAgendConsul>

          <ImageMedicalModal source={require('../../assets/Doutor.png')}/>

          <Title>Dr. Claudio</Title>

          <SubTitleRow>
          <SubTitle>Cliníco geral</SubTitle>
          <SubTitle>CRM-15286</SubTitle>
          </SubTitleRow>

            <ButtonModal onPress={ () => {navigation.replace("ConfirmarLocal")}}>
              <ButtonTitle>Ver Local Da Consulta</ButtonTitle>
            </ButtonModal>
  
            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
              <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
            </ButtonSecondary>


          </ModalAgendConsul>
        </ConfirmarModal>
      </Modal>
    )
}