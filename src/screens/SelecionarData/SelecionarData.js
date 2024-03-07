import { useState } from "react";
import { StyleSheet } from "react-native";
import { Container } from "../../components/Container/style";
import { SubTitleBlack, Title } from "../../components/Title/style";
import Picker from "react-native-picker-select";
import { ConfirmarConsutaModal } from "../../components/ConfirmarConsutaModal/ConfirmarConsutaModal";
import { ButtonModal, ButtonSecondary } from "../../components/Button/style";
import { ButtonSecundaryTitle, ButtonTitle } from "../../components/ButtonTitle/style";
import { PickerBox } from "./style";
import CalendarSelectData from "../../components/CalendarSelectData/CalendarSelectData";

import CalendarList from "../../components/Calendar/CalendarList";

export const SelecionarData = ({navigation}) => {
    // const [statusLista, setStatusLista] = useState("pendente");

    const [confConsultaModal, setConfConsultaModal] = useState(false);
    return(

        <Container>
        <Title>Selecionar Data</Title>
        
        {/* <CalendarList/> */}
        <CalendarSelectData/>

        <SubTitleBlack>Selecione um horário disponível</SubTitleBlack>
        <PickerBox>
        <Picker 
        style={styles.container}
        onValueChange={(value) => console.log(value)}
        placeholder={{ label: 'Selecionar horário', value: null }}
        // placeholderTextColor{"#60BFC5"} 
        items={[
        { label: '07:00', value: 'Sete' },
        { label: '08:00', value: 'Oito' },
        { label: '09:00', value: 'Nove' },
        { label: '10:00', value: 'Dez' },
        { label: '11:00', value: 'Onze' },
        { label: '12:00', value: 'Doze' },
        { label: '13:00', value: 'Treze' },
        { label: '14:00', value: 'Quatorze' },
        { label: '15:00', value: 'Quinze' },
        ]}
        />
        </PickerBox>

        <ConfirmarConsutaModal
        navigation={navigation}
        visible={confConsultaModal}
        setShowModalCancel={setConfConsultaModal}
        />


  
        <ButtonModal onPress={() => setConfConsultaModal(true)}>
            <ButtonTitle>Confirmar</ButtonTitle>
        </ButtonModal>

        <ButtonSecondary onPress={ () => {navigation.replace("SelecionarMedico")}}>
            <ButtonSecundaryTitle>Cancelar</ButtonSecundaryTitle>
        </ButtonSecondary>

        </Container>
        
        // <Container>
        //     <TitleSelect>Selecionar Data</TitleSelect>
        // </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 300,
    },
  });