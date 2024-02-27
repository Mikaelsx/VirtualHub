import { ButtonTabsStyle, ButtonTextStyle } from "./Style"

export const BtnConsultaAppointment = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonTabsStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabsStyle>
    )
}