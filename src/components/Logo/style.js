import styled from "styled-components";

// IMAGEM PRINCIPAL DO APP

export const Logo = styled.Image`
width: 60%;
margin: 20px 0px;
align-items: center;
`

// IMAGEM DO PACIENTE/MÉDICO COLOCADA NO LOCAL DO HEADER

export const UseHeader = styled.Image`
width: 100%;
height: 300px;
`
export const UseMap = styled.View`
width: 100%;
height: 360px;
`

export const Imag = styled.Image`
width: 100%;
height: 100%;
`


export const HeaderBox = styled.View`
margin-left: 15px;
margin-top: 10px;
`
export const Box = styled.View`
flex-direction: row;
margin-top: 35px
`
export const HeaderMedico = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 34,
})`
background-color: #496BBA;
width: 100%;
height: 15%;
border-radius: 0px 0px 15px 15px;
`
export const Sino = styled.View`
margin-top: 15px;
margin-right: 15px;
margin-left: 160px;
`

export const ImagMedico = styled.Image`
width: 60px;
height: 60px;
border-radius: 10px;
margin-bottom: 30px;
margin-left: 30px;
`

export const ImagBoxPaciente = styled.Image`
margin-right: 15px;
width: 77px;
height: 80px;
border-radius: 5px;
/* margin-bottom: 30px;
margin-left: 30px; */
`