import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";
import { useState } from "react";

export const AppointmentCard = ({
  navigation,
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  const [profile, setProfile] = useState("Paciente")
  return (
    // container principal
    <ContainerCardsList>
      <ProfileImage source={{ uri: "https://github.com/Mikaelsx.png" }} />

      <ContentCard>
        <DataProfileCard>
          <ProfileName>Mikael Souza</ProfileName>

          <ProfileData>
            <TextAge>16 anos</TextAge>
            <TextBold>Rotina</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />
            <TextBold situacao={situacao}>14:00</TextBold>
          </ClockCard>

          {/* valida e mostra o tipo de botão conforme a situação da consulta */}
          {situacao == "cancelado" ? (
            <></>
          ) : situacao == "pendente" ? (
            <ButtonCard onPress={onPressCancel}>
              <ButtonText situacao={situacao}>Cancelar</ButtonText>
            </ButtonCard>
          ) : (
            <ButtonCard onPress={profile !== "Paciente" ? onConnectAppointment : () => navigation.replace("Prontuario")}>
              <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
            </ButtonCard>
          ) 
          }
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};
