import { useContext } from 'react';
import styled from 'styled-components';
import { IoIosAirplane } from 'react-icons/io';
import { FiltersContext } from '../hooks/filtersContext';
import ITicket from '../types/ITicket';

const stopsMapping = [
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
];
const currenciesMapping = {
  'RUB': (price: number, rate: number) => `Купить\nза  ${Math.round(price * rate)} ₽`,
  'USD': (price: number, rate: number) => `Купить\nза  ${Math.round(price * rate)} $`,
  'EUR': (price: number, rate: number) => `Купить\nза  ${Math.round(price * rate)} €`
}

function Ticket({ data } :{ data: ITicket }) {
  const { currency, rates } = useContext(FiltersContext);
  
  return (
    <Card>
      <Purchase>
        <LogoImg src={`./logo/${data.carrier}.jpg`} alt="logo" />
        <PurchaseButton>
          {currenciesMapping[currency as keyof typeof currenciesMapping](data.price, rates[currency])}
        </PurchaseButton>
      </Purchase>
      <FlightInfo>
        <TimeBlock>
          <TimeBig>{data.departure_time}</TimeBig>
          <strong>{data.origin}, {data.origin_name}</strong>
          <Date>{data.departure_date}</Date>
        </TimeBlock>
        <ArrowBlock>
          {stopsMapping[data.stops]}
          <AirplaneIcon />
        </ArrowBlock>
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
  padding: 1.5rem;
  border-right: 1px solid var(--font-light-color);
`;
const PurchaseButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--secondary-color);
  color: var(--white-color);
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  white-space: pre-line;
  font-weight: var(--fw-medium);
  box-shadow: var(--shadow);

  &:hover {
    background-color: var(--hover-secondary-color);
  }
`;
const LogoImg = styled.img`
  width: 150px;
  height: 75px;
  object-fit: cover;
  object-position: center;
`;
const FlightInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  flex-basis: 1;
  padding: 1.5rem;
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
  position: relative;
  border-bottom: 1px solid var(--font-light-color);
  padding: 0.6rem 2rem;
  text-transform: uppercase;
  margin-left: -2.5rem;
`;
const AirplaneIcon = styled(IoIosAirplane)`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
`;


export default Ticket;

