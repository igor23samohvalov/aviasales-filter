
import useFilters from '../hooks/useFilters';
import { CheckboxContainer, StyledCheckbox, StyledButton} from './styles/Checkbox.styled';

interface CheckboxProps {
  label: string;
  value: string;
  isOnly: string;
  setOnly: React.Dispatch<React.SetStateAction<string>>;
};

function Checkbox({label, value, isOnly, setOnly}: CheckboxProps) {
  const { checkboxes, handleCheckboxes} = useFilters();

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

export default Checkbox;
