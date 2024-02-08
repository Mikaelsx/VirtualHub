import styled from "styled-components";

// INPUT

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898F"
})`
width: 90%;
height: 53px;
margin: 10px 0px;
align-items: center;
padding: 10px;

background-color: transparent;
border: 2px solid #49B3BA;
border-radius: 5px; 

font-size: 14px;
font-family: 'MontserratAlternates_600SemiBold';
`
// INPUT - LINE 

export const InputLine = styled(Input)`
width: 20%;
height: 53px;
margin: 10px 0px;
align-items: center;
align-self: center;
padding: -10px;
padding-left: 30px;

background-color: transparent;
border: 2px solid #49B3BA;
border-radius: 5px; 

font-size: 40px;
font-family: 'MontserratAlternates_600SemiBold';
`

// INPUT - BOX

export const InputBox = styled.View`
flex-direction: row;
gap: 15px;
`