import styled from "styled-components";

// TÍTULO

export const Title = styled.Text`
font-size: 20px;
font-family: 'MontserratAlternates_600SemiBold';
margin-bottom: 5px;
color: #33303E;
`

// SUBTÍTULO

export const SubTitle = styled.Text`
font-size: 16px;
font-family: 'Quicksand_500Medium'; 
margin-bottom: 5px;
color: #5F5C6B;
`

// TÍTULO - INPUT

export const TitleInput = styled.Text`
font-size: 16px;
font-family: 'Quicksand_600SemiBold'; 
margin-bottom: 5px;
color: #33303E;
`

// CAIXA DE TEXTO PERSONALIZADO

export const SubTitleBox = styled.View`
align-items: center;
margin: 10px 0px;
`

// SUBTÍTULO - ROW

export const SubTitleRow = styled(SubTitleBox)`
align-items: center;
gap: 20px;
flex-direction: row;
margin: 10px 0px;
`