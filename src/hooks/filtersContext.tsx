import { createContext, useState } from 'react';
import ICheckboxes from '../types/ICheckboxes';

const defaultCheckboxes = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
};

export const FiltersContext = createContext<any>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<string>('RUB');
  const [checkboxes, setCheckboxes] = useState<ICheckboxes>(defaultCheckboxes);

  const handleCheckboxes: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const param = e.target.value;

    setCheckboxes((prev: ICheckboxes) => ({
      ...prev,
      [param]: !prev[param as keyof typeof prev]
    }));
  } ;

  const value = {currency, checkboxes, setCurrency, handleCheckboxes};

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  )
}


