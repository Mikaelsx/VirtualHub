import styled from "styled-components";

// BUTTON

export const Button = styled.TouchableOpacity`
width: 90%;
height: 44px;
margin: 20px 0px;
padding: 12px 8px 12px 8px;

align-items: center;
justify-content: center;

background-color: #496BBA;
border: 2px solid #496BBA;
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