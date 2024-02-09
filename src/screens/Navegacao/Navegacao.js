// IMPORT

import { Button, View } from "react-native"

// EXPORT 

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
            title="Splash"
            onPress={() => navigation.navigate("Splash")}
            />
            <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />
            <Button
            title="RecuperarSenha"
            onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
            title="VerificarEmail"
            onPress={() => navigation.navigate("VerificarEmail")}
            />
            <Button
            title="RedefinirSenha"
            onPress={() => navigation.navigate("RedefinirSenha")}
            />
            <Button
            title="CriarConta"
            onPress={() => navigation.navigate("CriarConta")}
            />
            <Button
            title="Perfil"
            onPress={() => navigation.navigate("Perfil")}
            />
            <Button
            title="Prontuario"
            onPress={() => navigation.navigate("Prontuario")}
            />
            <Button
            title="Prescricao"
            onPress={() => navigation.navigate("Prescricao")}
            />
        </View>
    )
}