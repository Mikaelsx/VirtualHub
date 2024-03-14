// IMPORT

import { Button } from "react-native"
import { ViewNav } from "./style"

// EXPORT 

export const Navegacao = ({navigation}) => {
    return(
        <ViewNav>

        {/* LOGIN */}

        <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        />
        {/* HOME */}

        <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        />
        {/* SELECIONAR CLINICA */}
            
        <Button
        title="SelecionarClinica"
        onPress={() => navigation.navigate("SelecionarClinica")}
        />
        {/* SELECIONAR MEDICO */}

        <Button
        title="SelecionarMedico"
        onPress={() => navigation.navigate("SelecionarMedico")}
        />
        {/* SELECIONAR DATA */}

        <Button
        title="SelecionarData"
        onPress={() => navigation.navigate("SelecionarData")}
        />
        {/* CONFIRMAR LOCAL */}
            
        <Button
        title="ConfirmarLocal"
        onPress={() => navigation.navigate("ConfirmarLocal")}
        />
        {/* RECUPERAR SENHA */}

        <Button
        title="RecuperarSenha"
        onPress={() => navigation.navigate("RecuperarSenha")}
        />
        {/* VERIFICAR EMAIL */}

        <Button
        title="VerificarEmail"
        onPress={() => navigation.navigate("VerificarEmail")}
        />

        <Button
        title="RedefinirSenha"
        onPress={() => navigation.navigate("RedefinirSenha")}
        />
        {/* CRIAR CONTA */}

        <Button
        title="CriarConta"
        onPress={() => navigation.navigate("CriarConta")}
        />
        {/* PERFIL */}

        <Button
        title="Perfil"
        onPress={() => navigation.navigate("Perfil")}
        />
        {/* PRONTUARIO */}

        <Button
        title="Prontuario"
        onPress={() => navigation.navigate("Prontuario")}
        />
        {/* PRESCRICAO */}
        
        <Button
        title="Prescricao"
        onPress={() => navigation.navigate("Prescricao")}
        />
        {/* CONSULTAS MEDICO */}

        <Button
        title="ConsultasMedico"
        onPress={() => navigation.navigate("ConsultasMedico")}
        />
        <Button
        title="CameraPage"
        onPress={() => navigation.navigate("CameraPage")}
        />
        </ViewNav>

)
}
