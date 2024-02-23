import styled from "styled-components";
import css from "styled-components";

export const Select = styled.TouchableOpacity`
    width:70% ;
    height: 85px;

    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 5px;

    /* ${props => props.clickButton ? css`
        background-color: #496bba ;
    `: css`
        background-color: transparent;
        border: 2px solid #607ec5 ;
    `} */
`

export const Div = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const Viw = styled.View`
flex-direction: row;
`

export const Cal = styled.View`
width: 100px;
height: 25px;

justify-content: center;
align-items: center;
flex-direction: row;

border-radius: 5px;
background-color: #E8FCFD;
`

export const TitleCLin = styled.Text`
font-family: 'MontserratAlternates_600SemiBold';
font-size: 16px;
color: #33303E;
`
export const TextC = styled.Text`
font-family: 'Quicksand_600SemiBold';
font-size: 14px;
color: #4E4B59;
`
export const TextCian = styled(TextC)`
color: #49B3BA;
`
export const TextYel = styled(TextC)`
color: #F9A620;
`