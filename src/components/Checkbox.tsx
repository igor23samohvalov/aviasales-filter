import styled from 'styled-components';
import { useContext } from 'react';
import { FiltersContext } from '../hooks/filtersContext';

interface CheckboxProps {
  label: string;
  value: string;
  isOnly: string;
  setOnly: React.Dispatch<React.SetStateAction<string>>;
};

function Checkbox({label, value, isOnly, setOnly}: CheckboxProps) {
  const { checkboxes, handleCheckboxes} = useContext(FiltersContext);

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isOnly !== value) {
      setOnly(value);
      handleCheckboxes(e.currentTarget.value, true);
    } else {
      setOnly('');
      handleCheckboxes('', true);
    }
  };

  return (
    <CheckboxContainer
      className={checkboxes[value as keyof typeof checkboxes]
        ? 'checked'
        : 'none'
      }
    >  
      <StyledCheckbox
        type="checkbox"
        checked={checkboxes[value as keyof typeof checkboxes]}
        onChange={(e) => handleCheckboxes(e.target.value)}
        value={value}
        id={`${value}-checkbox`}
      />
      <label htmlFor={`${value}-checkbox`}>
        {label}
      </label>
      <StyledButton
        value={value}
        className={isOnly === value ? 'active' : 'none'}
        onClick={handleClick}
      >
        Только
      </StyledButton>
    </CheckboxContainer>
  );
};


const CheckboxContainer = styled.div`
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
const StyledCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid var(--font-primary-color);
  border-radius: 1px;
`;
const StyledButton = styled.button`
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

export default Checkbox;
