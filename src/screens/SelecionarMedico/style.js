import styled from "styled-components";
import css from "styled-components";

export const Con = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FBFBFB;
`

export const SelectMedicalImage = styled.Image`
width: 77px;
height: 80px;
border-radius: 5px;
`

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
export const SelectMedical = styled(Select).attrs({
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
})`
height: 102px;
width: 90%;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
flex-direction: row;
margin-bottom: 20px;

/* border: 2px solid black; */
`

export const SpaceButton = styled.View`
justify-content: center;
width: 100%;
height: 100px;
`
export const Div = styled.View`
flex-direction: row;
justify-content: center;
`

export const Viw = styled.View`
flex-direction: row;
`
export const Box = styled.View`
flex-direction: column;
position: relative;
margin-left: 100px;
margin-bottom: 0px;
`
export const Tox = styled.View`
margin-left: 10px;
justify-content: center;

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
export const TitleSelect = styled.Text`
margin: 50px 0px 50px 0px;
font-size: 20px;
font-family: 'MontserratAlternates_600SemiBold';
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
// LinkSelect

export const LinkSelect = styled.Text`
align-self: center;
margin-top: 20px;
margin-bottom: 50px;
font-size: 14px;
font-family: 'MontserratAlternates_600SemiBold';
color: #4D659D;
text-decoration-line: underline;
`