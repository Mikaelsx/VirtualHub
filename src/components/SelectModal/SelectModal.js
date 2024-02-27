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

export const SelectModal = ({ visible, setShowModalCancel, ...rest }) => {
  const [statusLista, setStatusLista] = useState("pendente");

    return(
      
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
          
        <AgendarModal>
          <ModalRetagle>
  
            <Title>Agendar Consulta</Title>

            {/* Qual o nível da consulta */}
            <SubTitleBlack>Qual o nível da consulta</SubTitleBlack>
            
            <Appointment>
            {/* botão para agendadas */}
            <BtnConsultaAppointment
            textButton={"Rotina"}
            clickButton={statusLista === "pendente"}
            onPress={() => setStatusLista("pendente")}
            />

            {/* botão para realizadas */}
            <BtnConsultaAppointment
            textButton={"Exame"}
            clickButton={statusLista === "realizado"}
            onPress={() => setStatusLista("realizado")}
            />

            {/* botão para canceladas */}
            <BtnConsultaAppointment
            textButton={"Urgência"}
            clickButton={statusLista === "cancelado"}
            onPress={() => setStatusLista("cancelado")}
            />
            </Appointment>


            {/* Informe a localização desejada */}
            <SubTitleBlack>Informe a localização desejada</SubTitleBlack>
            <Input placeholder={'Informe a localização'}></Input>
  
            <MargT></MargT>
  
            <ButtonModal>
              <ButtonTitle>Continuar</ButtonTitle>
            </ButtonModal>
  
            <ButtonSecondary onPress={() => setShowModalCancel(false)}>
              <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
            </ButtonSecondary>


          </ModalRetagle>
        </AgendarModal>
      </Modal>
    )
}