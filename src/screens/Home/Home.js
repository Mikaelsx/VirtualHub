import { useState } from "react";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { CalendarList } from "../../components/Calendar/CalendarList";
import { Container } from "../../components/Container/style";
import { Header } from "../../components/Header/Header";
import { ButBox, Button4, FilterAppointment } from "./style";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancelattionModal } from "../../components/CancellationModal/CancellationModal";
import { ShowModalAppointment } from "../../components/ShowModalAppointment/ShowModalAppointment";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizado" },
  { id: 3, nome: "Carlos", situacao: "pendente" },
  { id: 4, nome: "Carlos", situacao: "pendente" },
  { id: 5, nome: "Carlos", situacao: "cancelado" },
];

export const Home = () => {
  // state para o estado da lista(cards)
  const [statusLista, setStatusLista] = useState("pendente");

  // state para a exibição dos modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

  return (
    <Container>
      {/* Header */}
      <Header />

      {/* Calendário */}
      {/* <CalendarList /> */}

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

      {/* modal cancelar */}
      <CancelattionModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />
      
      {/* modal ver prontuário */}
      <ShowModalAppointment
        visible={showModalAppointment}
        setShowModalCancel={setShowModalAppointment}
      />

      {/* Button */}
      <ButBox>

      <Button4/>
      </ButBox>

    </Container>
  );
};