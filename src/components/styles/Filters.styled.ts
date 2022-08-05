import styled from 'styled-components';
import { styledTheme } from './Global';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-grow: 1;
  height: fit-content;
  box-shadow: ${styledTheme.shadow};
  background-color: ${styledTheme.whiteColor};
  margin-right: 1.5rem;

  > * {
    display: flex;
    width: 100%;
  };
  h4 {
    text-transform: uppercase;
    margin-top: 0;
  };

  @media (max-width: 768px) {
    margin: 0 0 1.5rem 0;
  };
`;
export const CurrencyBadge = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid ${styledTheme.primaryColor};
  color: ${styledTheme.primaryColor};
  flex-grow: 1;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: ${styledTheme.hoverPrimaryColor};
    cursor: pointer;
  };
  &.active {
    background-color: ${styledTheme.primaryColor};
    color: ${styledTheme.whiteColor};
  };
  :nth-of-type(1) {
    border-radius: 5px 0 0 5px;
    border-right: none;
  };
  :nth-of-type(3) {
    border-radius: 0 5px 5px 0;
    border-left: none;
  };
`;