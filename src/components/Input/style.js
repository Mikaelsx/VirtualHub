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

// INPUT - PACIENTE

export const InputPaciente = styled.TextInput.attrs({
    placeholderTextColor: "#4E4B59"
})`
width: 90%;
height: 53px;
margin: 10px 0px;
align-items: center;
padding: 10px;

background-color: #F5F3F3;
border: none ;
border-radius: 5px; 

font-size: 14px;
font-family: 'MontserratAlternates_500Medium';
`

// INPUT - PACIENTE GRANDE

export const InputPacienteGrande = styled.TextInput.attrs({
    placeholderTextColor: "#4E4B59"
})`
width: 90%;
height: 120px;
margin: 10px 0px;
align-items: center;
padding: 10px;

background-color: #F5F3F3;
border: none ;
border-radius: 5px; 

font-size: 14px;
font-family: 'MontserratAlternates_500Medium';
`
// INPUT - PACIENTE PEQUENO

export const InputPacientePequeno = styled(InputPaciente)`
width: 80%;
height: 53px;
margin: 10px 0px;

background-color: #F5F3F3;
border: none;
border-radius: 5px; 

font-size: 16px;
font-family: 'MontserratAlternates_600SemiBold';
`

export const InputPaciente2 = styled(InputPaciente)`
width: 40%;
height: 53px;

background-color: #F5F3F3;
margin: 0px 15px;
border: none;
border-radius: 5px; 

font-size: 14px;
font-family: 'MontserratAlternates_500Medium';
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

// INPUT - OUTPUT

export const OutPut = styled.View`
flex: 1;
`
