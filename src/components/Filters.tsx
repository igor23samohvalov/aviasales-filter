import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiltersContext } from '../hooks/filtersContext';
import Checkbox from './Checkbox';

function Filters() {
  const { currency, setCurrency } = useContext(FiltersContext);
  const [isOnly, setOnly] = useState<string>('');

  useEffect(() => {
    
  }, [isOnly])

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
        <Checkbox key={stop.value} {...stop} isOnly={isOnly} setOnly={setOnly} />
      ))}
    </Card>
  );
};

const currencies: string[] = ['RUB', 'USD', 'EUR'];
const stops: { label: string, value: string }[] = [
  {
    label: 'Все',
    value: 'all',
  },
  {
    label: 'Без пересадок',
    value: '0',
  },
  {
    label: '1 пересадка',
    value: '1',
  },
  {
    label: '2 пересадки',
    value: '2',
  },
  {
    label: '3 пересадки',
    value: '3',
  },
];

const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-grow: 1;
  align-self: flex-start;
  height: fit-content;
  box-shadow: var(--shadow);
  background-color: var(--white-color);

  > * {
    display: flex;
    width: 100%;
  };
  h4 {
    text-transform: uppercase;
    margin-top: 0;
  }
`;
const CurrencyBadge = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  flex-grow: 1;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: var(--hover-primary-color);
    cursor: pointer;
  };
  &.active {
    background-color: var(--primary-color);
    color: var(--white-color);
  };
  :nth-of-type(1) {
    border-radius: 5px 0 0 5px;
    border-right: none;
  }
  :nth-of-type(3) {
    border-radius: 0 5px 5px 0;
    border-left: none;
  }
`;

export default Filters;