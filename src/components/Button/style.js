import styled from "styled-components";

// BUTTON

export const Button = styled.TouchableOpacity`
width: 90%;
height: 44px;
margin: 20px 0px;
padding: 8px 8px 8px 8px;

align-items: center;
justify-content: center;

background-color: #496BBA;
border: 2px solid #496BBA;
border-radius: 5px; 
`

// BOX ROW
export const ButtonRow = styled.TouchableOpacity`
flex-direction: row;
gap: 20px;
`

// BUTTON CIRCLE

export const ButtonCircle = styled.TouchableOpacity`
width: 44px;
height: 44px;
margin: 20px 0px;
padding: 12px 8px 12px 8px;

align-items: center;
justify-content: center;

background-color: transparent;
border: none;
border-radius: 21px; 
`

// BUTTON RECTANGLE WHITE

export const ButtonRetangleWhite = styled.TouchableOpacity`
width: 100px;
height: 35px;
margin-bottom: 30px;

align-items: center;
justify-content: center;

background-color: #FBFBFB;
border: 2px solid #496BBA;
border-radius: 5px;
`

// BUTTON RECTANGLE BLUE

export const ButtonRetangleBlue = styled(ButtonRetangleWhite)`
background-color: #496BBA;
border: 2px solid #496BBA;
border-radius: 5px;
`
// BUTTON RECTANGLE - TEXT

export const ButtonRetangleTextBLue = styled.Text`
font-family: 'MontserratAlternates_600SemiBold';
font-size: 12px;
color: #607EC5;
`

export const ButtonRetangleTextWhite = styled(ButtonRetangleTextBLue)`
color: white;
`

// BUTTON

export const ButtonPequeno = styled.TouchableOpacity`
width: 50%;
height: 44px;
margin: 20px 0px;
padding: 12px 8px 12px 8px;
flex-direction: row;
gap: 10px;

align-items: center;
justify-content: center;

background-color: #49B3BA;
border: 2px solid #49B3BA;
border-radius: 5px; 
`

// TEXT DO BUTTON

export const ButtonTitle = styled.Text`
font-size: 14px;
font-family: 'MontserratAlternates_700Bold';
color: white;
`
// BUTTON - GOOGLE

export const ButtonGoogle = styled(Button)`
width: 90%;
height: 44px;
margin: 0px 0px;

align-items: center;
gap: 27px;
flex-direction: row;

background-color: transparent;
border: 2px solid #496BBA;
border-radius: 5px;
`

// TEXT DO BUTTON GOOGLE

export const ButtonTitleGoogle = styled.Text`
font-size: 14px;
font-family: 'MontserratAlternates_700Bold';
color: #496BBA;
`

export const Agenda = styled(Button)`
align-items: center;
flex-direction: row;
gap: 3px;
justify-content: center;
width: 100px;
height: 44px;
background-color: transparent;
border: none;
border-radius: 20px;
`

export const AgendaBlue = styled(Agenda)`
background-color: #ECF2FF;
width: 100px;
height: 44px;
`
export const ButtonModal = styled.TouchableOpacity`
width: 80%;
height: 44px;
margin: 20px 0px;
padding: 8px 8px 8px 8px;

align-items: center;
justify-content: center;

background-color: #496BBA;
border: 2px solid #496BBA;
border-radius: 5px; 
`
export const ButtonSecondary = styled(Button)`
  background-color: transparent ;
  border:none ;
  margin-bottom:30px ;
`