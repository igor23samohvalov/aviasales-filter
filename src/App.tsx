import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Container } from './components/styles/Container';
import Filters from './components/Filters';
import Ticket from './components/Ticket';
import ITicket from './types/ITicket';
import { FiltersContext } from './hooks/filtersContext';

const filterMapping = {
  'none': 0,
  'one': 1,
  'two': 2,
  'three': 3,
}

function App() {
  const { checkboxes } = useContext(FiltersContext);

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
    if (checkboxes.all) setFilteredTickets(tickets)
    else if (!Object.values(checkboxes).find((bol) => bol)) setFilteredTickets(tickets)
    else {
      const filterKeys = Object.entries(checkboxes)
        .filter(([_, value]) => value)
        .map(([key]) => key);
      
      const newTickets = tickets
        .filter(({ stops }) => (
          filterKeys.some((key) => filterMapping[key as keyof typeof filterMapping] === stops
        )))
        .sort((a, b) => a.stops - b.stops);

      setFilteredTickets(newTickets);
    }
  }, [checkboxes]);

  return (
    <Container>
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
  margin-top: 4rem;
`;
const TicketsContainer = styled.section`
  display flex;
  flex-direction: column;
  flex-grow: 3;
  gap: 1.5rem;
`;

export default App;
