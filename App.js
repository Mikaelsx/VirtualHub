// IMPORTS

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORT - TELAS

import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Splash } from "./src/screens/Splash/Splash";
import { Login } from "./src/screens/Login/Login";
import { RecuperarSenha } from "./src/screens/RecuperarSenha/RecuperarSenha";
import { VerificarEmail } from "./src/screens/VerificarEmail/VerificarEmail";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { CriarConta } from "./src/screens/CriarConta/CriarConta";

// IMPORT - FONTS

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
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
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: "Splash" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
