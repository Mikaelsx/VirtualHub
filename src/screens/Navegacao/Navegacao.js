import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
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
        </View>
    )
}