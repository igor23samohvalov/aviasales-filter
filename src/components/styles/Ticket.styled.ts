import styled from 'styled-components';
import { IoIosAirplane } from 'react-icons/io';
import { styledTheme } from './Global';

export const Card = styled.div`
  display: flex;
  box-shadow: ${styledTheme.shadow};
  width: 100%;
  background-color: ${styledTheme.whiteColor};

  @media (max-width: 768px) {
    flex-direction: column;
  };
`;
export const Purchase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-right: 1px solid ${styledTheme.fontLightColor};

  @media (max-width: 768px) {
    border-bottom: 1px solid ${styledTheme.fontLightColor};
  };
`;
export const PurchaseButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  background-color: ${styledTheme.secondaryColor};
  color: ${styledTheme.whiteColor};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  white-space: pre-line;
  font-weight: ${styledTheme.fwMedium};
  box-shadow: ${styledTheme.shadow};

  &:hover {
    background-color: ${styledTheme.hoverSecondaryColor};
  }
`;
export const LogoImg = styled.img`
  width: 150px;
  height: 75px;
  object-fit: cover;
  object-position: center;
`;
export const FlightInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  flex-basis: 1;
  padding: 1.5rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
export const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-grow: 2;

    strong, span {
      font-size: 12px;
    }
  }
`;
export const TimeBig = styled.h4`
  font-size: 40px;
  margin: 0 0 0.5rem 0;
  font-weight: ${styledTheme.fwMedium};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const Date = styled.span`
  color: ${styledTheme.fontLightColor};
`;
export const ArrowBlock = styled.div`
  position: relative;
  border-bottom: 1px solid ${styledTheme.fontLightColor};
  padding: 0.6rem 2rem;
  text-transform: uppercase;
  margin-left: -2.5rem;

  @media (max-width: 768px) {
    flex-grow: 1;
    padding: 0.25rem 0;
    font-size: 14px;
  }
`;
export const AirplaneIcon = styled(IoIosAirplane)`
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
`;