import styled from "styled-components";

export const ImageMedicalModal = styled.Image`
width: 285px;
height: 180px;
border-radius: 10px;
margin: 15px 15px;
`

export const ConfirmarModal = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.60) ;
    justify-content: center;
`
export const ModalAgendConsul = styled.View.attrs({
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 10,
})`
    padding: 30px 30px 10px ;
    width:  95%;
    height: 60%;
    border-radius: 10px ;
    background-color:#fff ;
    align-items:center ;
    align-self: center;
`

export const BoxTit = styled.View`
margin: 10px 10px;
align-items: center;
justify-content: center;
`
export const BoxFonts = styled.View`
align-self: flex-start;
gap: 20px;
`
export const BoxDiver = styled.View`
align-self: flex-start;
gap: -5px;
`


export const H1 = styled.Text`
font-size: 16px;
font-family: 'Quicksand_500Medium';
color: #000000;
`
export const H2 = styled.Text`
font-size: 16px;
font-family: 'Quicksand_600SemiBold';
margin-bottom: 5px;
margin-top: 5px;
color: #33303E;
`
export const H3 = styled.Text`
font-size: 14px;
font-family: 'Quicksand_500Medium';
margin-bottom: 5px;
margin-top: 5px;
color: #4E4B59;
`