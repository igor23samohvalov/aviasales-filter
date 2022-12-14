import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Container from "./components/styles/Container";
import Filters from "./components/Filters";
import Ticket from "./components/Ticket";
import ITicket from "./types/ITicket";
import Header from "./components/Header";
import useFilters from "./hooks/useFilters";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
const TicketsContainer = styled.section`
  display flex;
  flex-direction: column;
  flex-grow: 3;
`;

function App() {
  const { checkboxes } = useFilters();

  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    axios
      .get("/tickets.json")
      .then((res) => res.data)
      .then(({ tickets }) => {
        const sortedTickets = tickets.sort(
          (a: { stops: number }, b: { stops: number }) => a.stops - b.stops,
        );
        setTickets(sortedTickets);
        setFilteredTickets(sortedTickets);
      });
  }, []);

  useEffect(() => {
    if (checkboxes.only)
      setFilteredTickets(
        tickets.filter(
          (t) =>
            String(t.stops) === checkboxes.only || checkboxes.only === "all",
        ),
      );
    else if (checkboxes.all) setFilteredTickets(tickets);
    else if (!Object.values(checkboxes).find((bol) => bol))
      setFilteredTickets(tickets);
    else {
      const filterKeys = Object.entries(checkboxes)
        .filter(([, value]) => value)
        .map(([key]) => key);
      const newTickets = tickets.filter(({ stops }) =>
        filterKeys.some((key) => key === String(stops)),
      );

      setFilteredTickets(newTickets);
    }
  }, [checkboxes]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Filters />
        <TicketsContainer>
          {filteredTickets.map((t) => (
            <Ticket key={t.arrival_time} data={t} />
          ))}
        </TicketsContainer>
      </Wrapper>
    </Container>
  );
}

export default App;
