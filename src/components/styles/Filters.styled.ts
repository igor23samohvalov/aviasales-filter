import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-grow: 1;
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
export const CurrencyBadge = styled.div`
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