import { Modal } from "react-native";
import { SubTitle, Title } from "../Title/style";
import { ImageModal, ModalContent, PatientModal } from "./style";
import { ButtonSecundaryTitle, ButtonTitle } from "../ButtonTitle/style";
import { ButtonModal, ButtonSecondary } from "../Button/style";
import { BoxRow } from "../Container/style";

export const ShowModalAppointment = ({visible, setShowModalCancel, ...rest }) => {

  //  AQUI
  //  TypeError: Cannot read property 'replace' of undefined, js engine: hermes

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>

          <ImageModal source={{ uri: "https://github.com/Mikaelsx.png" }} />
          <Title>Mikael Souza</Title>

          <BoxRow>
            <SubTitle>16 Anos</SubTitle>
          </BoxRow>

          <ButtonModal>
            <ButtonTitle>Inserir prontuário</ButtonTitle>
          </ButtonModal>

          <ButtonSecondary onPress={() => setShowModalCancel(false)}>
            <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
