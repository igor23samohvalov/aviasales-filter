import styled from 'styled-components';
import { useContext } from 'react';
import { FiltersContext } from '../hooks/filtersContext';

interface CheckboxProps {
  label: string;
  value: string;
}

function Checkbox({label, value}: CheckboxProps) {
  const { checkboxes, handleCheckboxes} = useContext(FiltersContext);

  return (
    <div>
      <label>
        <StyledCheckbox
          type="checkbox"
          checked={checkboxes[value as keyof typeof checkboxes]}
          onChange={handleCheckboxes}
          value={value}
        />
        {label}
      </label>
    </div>
  );
};

const StyledCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid var(--font-primary-color);
  border-radius: 1px;
  vertical-align: sub;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export default Checkbox;
