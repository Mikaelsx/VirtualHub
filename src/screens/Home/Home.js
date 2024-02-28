import { useState } from "react";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { Container } from "../../components/Container/style";
import { Header } from "../../components/Header/Header";
import { ButBox, Button4, FilterAppointment, Rodape } from "./style";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancelattionModal } from "../../components/CancellationModal/CancellationModal";
import { ShowModalAppointment } from "../../components/ShowModalAppointment/ShowModalAppointment";
import { SelectModal } from "../../components/SelectModal/SelectModal";

import { FontAwesome5 } from '@expo/vector-icons';
import CalendarList from "../../components/Calendar/CalendarList";

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


      {/* botao agendar - fazer */}

      {/* <ButBox
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
        statusLista == item.situacao && (
          <Button4
          situacao={item.situacao}
          onPressSelect={() => setSelectModal(true)}
        />
        )
        }
        showsVerticalScrollIndicator={false}
      /> */}

      
      {/* <ButBox>
      <Button4
        // situacao={item.situacao}
        onPressSelect={() => setSelectModal(true)}
      />
      </ButBox> */}

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

      <SelectModal
        visible={selectModal}
        setShowModalCancel={setSelectModal}
      />

      {/* modal agendamento */}
        {/* (
        <ButtonCard onPress={onPressSelect}>
          <ButtonText situacao={situacao}>Agendar consulta</ButtonText>
        </ButtonCard>
         ) */}

      {/* Button */}
      <ButBox>
      <Button4 onPress={() => setSelectModal(true)}>
      <FontAwesome5 name="hand-holding-medical" size={20} color="white" />
      </Button4>
      </ButBox>

      <Rodape>
        
      </Rodape>


    </Container>
  );
};