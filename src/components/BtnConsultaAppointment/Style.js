import styled, { css } from "styled-components";

export const ButtonTabsStyle = styled.TouchableHighlight`
    /* padding: 12px 14px ; */
    border-radius: 5px ;
    height: 40px;
    width: 88px;
    align-items: center;
    justify-content: center;

    /* validação botão*/
    ${props => props.clickButton ? css`
        background-color: #34898F ;
    `: css`
        background-color: transparent;
        border: 2px solid #34898F ;
    `}
`

export const ButtonTextStyle = styled.Text`
    font-size: 12px ;
    font-family: 'MontserratAlternates_600SemiBold' ;

    /* validação do texto do botão */
    ${props => props.clickButton ? css`
        color: #fbfbfb ;
    `: css`
        color: #34898F;
    `}
`