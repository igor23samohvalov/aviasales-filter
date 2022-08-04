import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  flex-grow: 1;
  height: 20px;
  align-items: center;
  padding: 0.5rem 2rem;
  gap: 0.5rem;
  margin-left: -2rem;
  margin-right: -2rem;

  &.checked {
    background-color: var(--hover-primary-color);

    &:hover > button {
      display: block;
    };
  };
`;
export const StyledCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid var(--font-primary-color);
  border-radius: 1px;
`;
export const StyledButton = styled.button`
  display: none;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--primary-color);
  background-color: transparent;
  margin-left: auto;
  border: none;
  font-weight: bold;
  

  &.active {
    display: block;
  }
`;