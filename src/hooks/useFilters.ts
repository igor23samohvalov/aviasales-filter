import { useState } from 'react';
import ICheckboxes from '../types/ICheckboxes';

const defaultCheckboxes = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
};

function useFilters() {
  const [currency, setCurrency] = useState<string>('RUB');
  const [checkboxes, setCheckboxes] = useState<ICheckboxes>(defaultCheckboxes);

  const handleCheckboxes: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const param = e.target.value;

    setCheckboxes((prev: ICheckboxes) => ({
      ...prev,
      [param]: !prev[param as keyof typeof prev]
    }));
  } ;

  const handleCurrency = (cur: string): void => {
    setCurrency(cur);
  };

  return {
    currency,
    handleCurrency,
    checkboxes,
    handleCheckboxes,
  };
};

export default useFilters;