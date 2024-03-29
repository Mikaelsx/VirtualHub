// IMPORTS

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from 'expo-linear-gradient';


// IMPORT - TELAS

import { Navegacao } from "./src/screens/Navegacao/Navegacao";
// import { Splash } from "./src/screens/Splash/Splash";
import { Login } from "./src/screens/Login/Login";
import { RecuperarSenha } from "./src/screens/RecuperarSenha/RecuperarSenha";
import { VerificarEmail } from "./src/screens/VerificarEmail/VerificarEmail";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { CriarConta } from "./src/screens/CriarConta/CriarConta";
import { Perfil } from "./src/screens/Perfil/Perfil";
import { Prontuario } from "./src/screens/Prontuario/Prontuario";
import { Prescricao } from "./src/screens/Prescricao/Prescricao";
import { ConsultasMedico } from "./src/screens/ConsultasMedico/ConsultasMedico";
import { Home } from "./src/screens/Home/Home";
import { SelecionarClinica } from "./src/screens/SelecionarClinica/SelecionarClinica";
import { SelecionarMedico } from "./src/screens/SelecionarMedico/SelecionarMedico";
import { SelecionarData } from "./src/screens/SelecionarData/SelecionarData";
import { ConfirmarLocal } from "./src/screens/ConfirmarLocal/ConfirmarLocal";

// IMPORT - FONTS

import { useFonts, MontserratAlternates_500Medium, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_400Regular ,Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { View } from "react-native";
import { Main } from "./src/screens/Main/Main";


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // CONTAINER - envolve toda a estrutura de navegação 

    // NAVIGATOR - componente para a navegação

    // SCREEN - tela
    // NAME - nome da tela
    // COMPONENTO - componente que será chamado
    // OPTIONS{TITLE} - titulo da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
        />
      {/* <Stack.Screen
      name="Navegacao"
      component={Navegacao}
      options={{ title: "Navegação" }}
      /> */}
      <Stack.Screen
      name="Main"
      component={Main}
      options={{ title: "Main" }}
      />

      <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "Home" }}
      />

      <Stack.Screen
      name="SelecionarClinica"
      component={SelecionarClinica}
      options={{ title: "SelecionarClinica" }}
      />

      <Stack.Screen
      name="SelecionarMedico"
      component={SelecionarMedico}
      options={{ title: "SelecionarMedico" }}
      />

      <Stack.Screen
      name="SelecionarData"
      component={SelecionarData}
      options={{ title: "SelecionarData" }}
      />

      <Stack.Screen
      name="ConfirmarLocal"
      component={ConfirmarLocal}
      options={{ title: "ConfirmarLocal" }}
      />

     <Stack.Screen
           name="RecuperarSenha"
           component={RecuperarSenha}
         options={{ title: "Recuperar Senha" }}
         />
         <Stack.Screen
           name="VerificarEmail"
           component={VerificarEmail}
           options={{ title: "Verificar Email" }}
         />
         <Stack.Screen
           name="RedefinirSenha"
           component={RedefinirSenha}
           options={{ title: "Redefinir Senha" }}
         />
         <Stack.Screen
           name="CriarConta"
           component={CriarConta}
           options={{ title: "Criar Conta" }}
         />
    <Stack.Screen
           name="Perfil"
           component={Perfil}
           options={{ title: "Perfil" }}
         />
         <Stack.Screen
           name="Prontuario"
           component={Prontuario}
           options={{ title: "Prontuario" }}
         />
         <Stack.Screen
           name="Prescricao"
           component={Prescricao}
           options={{ title: "Prescricao" }}
         />
         <Stack.Screen
           name="ConsultasMedico"
           component={ConsultasMedico}
           options={{ title: "ConsultasMedico" }}
         />

      </Stack.Navigator>
    </NavigationContainer>

        //         {/* <Stack.Screen
        //   name="Splash"
        //   component={Splash}
        //   options={{ title: "Splash" }}
        // /> */}


  );
}
