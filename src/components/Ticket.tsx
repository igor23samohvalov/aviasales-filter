import styled from 'styled-components';
import useFilters from '../hooks/useFilters';
import ITicket from '../types/ITicket';

const stopsMapping = [
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
];
const currenciesMapping = {
  'RUB': (price: string) => `${price} ₽`,
  'USD': (price: string) => `${price} $`,
  'EUR': (price: string) => `${price} €`
}

function Ticket({ data } :{ data: ITicket }) {
  const { currency } = useFilters();
  
  return (
    <Card>
      <Purchase>
        <h3 style={{ margin: 0 }}>Turkish Airlines</h3>
        <PurchaseButton>
          {currenciesMapping[currency as keyof typeof currenciesMapping](`Купить за ${data.price}`)}
        </PurchaseButton>
      </Purchase>
      <FlightInfo>
        <TimeBlock>
          <TimeBig>{data.departure_time}</TimeBig>
          <strong>{data.origin}, {data.origin_name}</strong>
          <Date>{data.departure_date}</Date>
        </TimeBlock>
        <ArrowBlock>{stopsMapping[data.stops]}</ArrowBlock>
        <TimeBlock>
          <TimeBig>{data.arrival_time}</TimeBig>
          <strong>{data.destination_name}, {data.destination}</strong>
          <Date>{data.arrival_date}</Date>
        </TimeBlock>
      </FlightInfo>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  box-shadow: var(--shadow);
  width: 100%;
  background-color: var(--white-color);
`;
const Purchase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-right: 1px solid var(--font-light-color);
`;
const FlightInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1rem;
  flex-grow: 1;
`;
const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const TimeBig = styled.h4`
  font-size: 40px;
  margin: 0 0 0.5rem 0;
  font-weight: var(--fw-medium);
`;
const Date = styled.span`
  color: var(--font-light-color);
`;
const ArrowBlock = styled.div`
  border-bottom: 1px solid var(--font-light-color);
  padding-bottom: 0.5rem;
  text-transform: uppercase;
`;
const PurchaseButton = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  background-color: var(--secondary-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export default Ticket;

