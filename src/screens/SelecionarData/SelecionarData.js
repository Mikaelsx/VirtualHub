import { TitleSelect } from "../../components/ButtonSelectClinic/style"
import { Container } from "../../components/Container/style"

import Picker from "react-native-picker-select";
import { SubTitle, SubTitleBlack } from "../../components/Title/style";
import { Button, ButtonModal, ButtonSecondary, ButtonTitle } from "../../components/Button/style";
import { SpaceButton } from "../SelecionarMedico/style";
import { StyleSheet } from "react-native";
import { PickerBox } from "./style";
import { MargT } from "../Home/style";
import { ButtonSecundaryTitle } from "../../components/ButtonTitle/style";

import CalendarSelectData from '../../components/CalendarSelectData/CalendarSelectData'

export const SelecionarData = () => {
    return(

        <Container>
        <TitleSelect>Selecionar Data</TitleSelect>

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
  
        <ButtonModal>
            <ButtonTitle>Continuar</ButtonTitle>
        </ButtonModal>

        <ButtonSecondary onPress={() => setShowModalCancel(false)}>
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