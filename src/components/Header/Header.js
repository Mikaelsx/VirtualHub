import styled from "styled-components";
import { Box, HeaderBox, HeaderMedico, ImagMedico, Sino } from "../Logo/style";
import { LinearGradient } from "expo-linear-gradient";
import { TitleConsulta, TitleWhite } from "../Title/style";
import { MaterialIcons } from '@expo/vector-icons';


export const Header = () => {
    return(

        <HeaderMedico>
            <LinearGradient 
            style={{
            flex: 1, 
	        borderBottomLeftRadius: 15,
	        borderBottomRightRadius: 15,
            start:{ x : -0.05 , y : 1.08 },
            end:{ x: 1, y: 0 },
            useAngle: true,
            angle: 45,
        }}
        colors={['#60BFC5','#496BBA']}>

            <Box>

            <ImagMedico source={{ uri: "https://github.com/Mikaelsx.png" }}/>

            <HeaderBox>
            <TitleConsulta>Bem vindo</TitleConsulta>
            <TitleWhite>Mikael.S</TitleWhite>
            </HeaderBox>
            
            <Sino>
            <MaterialIcons name="notifications" size={24} color="white"/>
            </Sino>

            </Box>
            </LinearGradient>

            </HeaderMedico>
    )
}