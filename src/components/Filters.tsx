import { useContext } from 'react';
import styled from 'styled-components';
import { FiltersContext } from '../hooks/filtersContext';
import useFilters from '../hooks/useFilters';
import Checkbox from './Checkbox';

const currencies: string[] = ['RUB', 'USD', 'EUR'];
const stops: { label: string, value: string }[] = [
  {
    label: 'Все',
    value: 'all',
  },
  {
    label: 'Без пересадок',
    value: 'none',
  },
  {
    label: '1 пересадка',
    value: 'one',
  },
  {
    label: '2 пересадки',
    value: 'two',
  },
  {
    label: '3 пересадки',
    value: 'three',
  },
];

function Filters() {
  const { currency, setCurrency } = useContext(FiltersContext);

  return (
    <Card>
      <h4>Валюта</h4>
      <div>
        {currencies.map((cur) => (
          <CurrencyBadge
            key={cur}
            onClick={() => setCurrency(cur)}
            className={cur === currency ? 'active' : 'none'}
          >
            {cur}
          </CurrencyBadge>
        ))}
      </div>
      <h4>Количество пересадок</h4>
      {stops.map((stop) => (
        <Checkbox key={stop.value} {...stop} />
      ))}
    </Card>
  );
};

const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-basis: 300px;
  align-self: flex-start;
  height: 400px;
  box-shadow: var(--shadow);
  background-color: var(--white-color);

  > * {
    display: flex;
  };
`;
const CurrencyBadge = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);

  &:hover {
    background-color: var(--hover-color);
    cursor: pointer;
  };
  &.active {
    background-color: var(--primary-color);
    color: var(--white-color);
  };
`;

export default Filters;