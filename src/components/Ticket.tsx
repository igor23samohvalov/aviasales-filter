import ITicket from '../types/ITicket';
import useFilters from '../hooks/useFilters';
import {
  Card,
  Purchase,
  PurchaseButton,
  LogoImg,
  FlightInfo,
  TimeBlock,
  TimeBig,
  Date,
  ArrowBlock,
  AirplaneIcon,
} from './styles/Ticket.styled';

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
  const { currency, rates } = useFilters();
  
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




export default Ticket;

