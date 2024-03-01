import styled from "styled-components";

// CONTAINER

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FBFBFB;
`

export const Med = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
})`
flex: 1;
width: 100%;
align-items: center;
background-color: #FBFBFB;
/* border: 2px solid black; */
border-radius: 20px 20px 0px 0px;
overflow: 'hidden';
`

export const ContainerPaciente = styled.SafeAreaView`
width: 100%;
height: 102px;
padding-left: 20px;
border-radius: 5px;
align-items: flex-start;
justify-content: center;
background-color: white;
border: none;
box-shadow: 10px 5px 5px black;
`

export const ListaPaciente = styled.SafeAreaView`
gap: 20px;
margin-right: 35px;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
`

// SAFE INPUT BOX

export const SafeInputBox = styled.View`
background-color: #FAFAFA;
margin: 5px 0px;
`

export const SafeButtonBox = styled.View`
background-color: #FFFFFF;
gap: 20px;
flex-direction: row;
justify-content: space-between;
margin-left: 10px;
margin-right: 10px;
margin: 5px 0px;
`

// SCROLL VIEW

export const Scroll = styled.ScrollView`
flex: 1;
flex-direction: 'column';
padding-left: 35px;
width: 100%;
background-color: #FAFAFA;
`

// LINE VIEW

export const LineView = styled.View`
flex: 1;
justify-content: space-between;
flex-direction: row;
`

export const BoxRow = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`

export const BoxRed = styled.View`
flex-direction: row;
gap: 40px
`

export const BoxCian = styled.View`
justify-content: center;
align-items: center;
gap: 5px;
flex-direction: row;
width: 100px;
height: 26px;
background-color: #E8FCFD;
border: none;
border-radius: 5px;
`

export const SubTitleBoxRow = styled.View`
flex-direction: row;
justify-content: center;
align-self: flex-start;
margin-left: 30px;
margin-top: 20px;
gap: 150px;
`

