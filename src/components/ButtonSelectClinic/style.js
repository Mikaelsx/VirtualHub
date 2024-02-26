import styled from "styled-components";
import css from "styled-components";

export const Select = styled.TouchableOpacity`
    width:90% ;
    height: 85px;
    margin: 10px 0px 10px 0px;

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

export const TitleSelect = styled.Text`
margin: 50px 0px 70px 0px;
font-size: 20px;
font-family: 'MontserratAlternates_600SemiBold';
margin-bottom: 5px;
color: #33303E;
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

export const CancPac = styled.Text`
justify-content: center;
align-self: center;
margin-top: 20px;
margin-bottom: 50px;
font-size: 14px;
font-family: 'MontserratAlternates_600SemiBold';
color: #4D659D;
text-decoration-line: underline;
`