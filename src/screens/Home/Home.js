// IMPORTS

import { useState } from "react";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { Container, SafeButtonBox } from "../../components/Container/style";
import { Header } from "../../components/Header/Header";
import { ButBox } from "./style";
import { Button4 } from "./style";
import { FilterAppointment } from "./style";
import { Rodape } from "./style";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancelattionModal } from "../../components/CancellationModal/CancellationModal";
import { ShowModalAppointment } from "../../components/ShowModalAppointment/ShowModalAppointment";
import { SelectModal } from "../../components/SelectModal/SelectModal";

import { FontAwesome5 } from '@expo/vector-icons';
import CalendarList from "../../components/Calendar/CalendarList";
import { AgendaBlue } from "../../components/Button/style";
import { TitleButton } from "../../components/Title/style";
import { Agenda } from "react-native-calendars";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';

// CONST

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizado" },
  { id: 3, nome: "Carlos", situacao: "pendente" },
  { id: 4, nome: "Carlos", situacao: "pendente" },
  { id: 5, nome: "Carlos", situacao: "cancelado" },
];

// EXPORT

export const Home = () => {
  // state para o estado da lista(cards)
  const [statusLista, setStatusLista] = useState("pendente");

  // state para a exibição dos modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [selectModal, setSelectModal] = useState(false);

  return (
    <Container>
      {/* Header */}
      <Header />

      {/* ERRO AQUIIIIII */}
      <CalendarList/>

      {/* Filtros (botões) */}
      {/* Container */}
      <FilterAppointment>
        {/* botão para agendadas */}
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />

        {/* botão para realizadas */}
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizado"}
          onPress={() => setStatusLista("realizado")}
        />

        {/* botão para canceladas */}
        <BtnListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "cancelado"}
          onPress={() => setStatusLista("cancelado")}
        />
      </FilterAppointment>

      {/* Seção de Cards */}
      {/* Lista */}
      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <AppointmentCard
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointment={() => setShowModalAppointment(true)}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />


      {/* MODAL CANCELAR */}
      <CancelattionModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />
      
      {/* MODAL PRONTUARIO */}
      <ShowModalAppointment
        visible={showModalAppointment}
        setShowModalCancel={setShowModalAppointment}
      />

      {/* MODAL SELECIONAR CONSULTA */}
      <SelectModal
        visible={selectModal}
        setShowModalCancel={setSelectModal}
      />

      <Button4 onPress={() => setSelectModal(true)}>
      <FontAwesome5 name="hand-holding-medical" size={20} color="white" />
      </Button4>


    </Container>
  );
};