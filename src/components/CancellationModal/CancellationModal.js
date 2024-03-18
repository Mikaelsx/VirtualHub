import { Modal } from "react-native";
import { Title } from "../Title/style";
import { ModalContent, ModalText, PatientModal } from "./style";
import { ButtonSecundaryTitle, ButtonTitle } from "../ButtonTitle/style";
import { ButtonModal, ButtonSecondary } from "../Button/style";

import * as Notifications from 'expo-notifications' // EXPO NOTIFICATIONS

// SOLICITA PERMISSÕES DE NOTIFICAÇÃO AO INICIAR O APP
Notifications.requestPermissionsAsync(); 

// DEFINE COMO AS NOTIFICAÇÕES DEVEM SER TRATADAS QUANDO RECEBIDAS
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // MOSTRAR O ALERTA QUANDO A NOTIFICAÇÃO FOR RECEBIDA
    shouldShowAlert : true,
    // REPRODUS SOM AO RECEBER NOTIFICAÇÃO
    shouldPlaySound : false,
    // NÚMERO DE NOTIFICAÇÕES NO ÍCONE DO APP
    shouldSetBadge : false,
  })
})

export const CancelattionModal = ({ visible, setShowModalCancel, ...rest }) => {

  // FUNÇÃO PARA LIDAR COM CHAMADA DE NOTIFICAÇÃO
  const handleCallNotifications = async () => {
    // OBTEM STATUS DA PERMISSÃO
    const {status} = await Notifications.getPermissionsAsync();
    // VERIFICA SE O USUÁRIO CONCEDEU PERMISSÃO
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas.")
      return;
    }

    // AGENDA UMA NOTIFICAÇÃO 
    await Notifications.scheduleNotificationAsync({
      content : {
        title : "Consulta Cancelada",
        body : "Notificação recebida.",
        color: '#49B3BA'
      },
      trigger : null,
    })
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>

          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          <ButtonModal onPress={handleCallNotifications}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </ButtonModal>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
