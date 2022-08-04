import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Container } from './components/styles/Container';
import Filters from './components/Filters';
import Ticket from './components/Ticket';
import ITicket from './types/ITicket';
import Header from './components/Header';
import useFilters from './hooks/useFilters';

function App() {
  const { checkboxes } = useFilters();

  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    axios.get('/tickets.json')
      .then((res) => res.data)
      .then(({ tickets }) => {
        setTickets(tickets);
        setFilteredTickets(tickets);
      })
  }, []);
  
  useEffect(() => {
    if (checkboxes.only) setFilteredTickets(tickets.filter((t) => (
      String(t.stops) === checkboxes.only || checkboxes.only === 'all'
    )))
    else if (checkboxes.all) setFilteredTickets(tickets)
    else if (!Object.values(checkboxes).find((bol) => bol)) setFilteredTickets(tickets)
    else {
      const filterKeys = Object.entries(checkboxes)
        .filter(([_, value]) => value)
        .map(([key]) => key);
      
      const newTickets = tickets
        .filter(({ stops }) => (filterKeys.some((key) => key === String(stops))))
        .sort((a, b) => a.stops - b.stops);

      setFilteredTickets(newTickets);
    }
  }, [checkboxes]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Filters />
        <TicketsContainer>
          {filteredTickets.map((t) => <Ticket key={t.arrival_time} data={t}/>)}
        </TicketsContainer>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.main`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const TicketsContainer = styled.section`
  display flex;
  flex-direction: column;
  flex-grow: 3;
  gap: 1.5rem;
`;

export default App;
