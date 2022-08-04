import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import ICheckboxes from '../../types/ICheckboxes';
import IRates from '../../types/IRates';

const defaultCheckboxes = {
  'all': false,
  '0': false,
  '1': false,
  '2': false,
  '3': false,
  'only': '',
};
const defaultRates = {
  'EUR': 0.016325,
  'USD': 0.016632,
  'RUB': 1,
};

export const FiltersContext = createContext<any>(null);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<string>('RUB');
  const [rates, setRates] = useState<IRates>(defaultRates)
  const [checkboxes, setCheckboxes] = useState<ICheckboxes>(defaultCheckboxes);

  useEffect(() => {
    axios.get('https://api.apilayer.com/exchangerates_data/latest?symbols=EUR,USD&base=RUB', {
      headers: { 'apikey': 'nxjCcWbimdb3Y2FxpB7AHXy0I94RjPdk' },
      maxRedirects: 1,
    })
      .then((res) => res.data)
      .then(({ rates }: { rates: IRates }) => setRates((prev) => ({...prev, ...rates})))
      .catch(console.log)
  }, []);

  const handleCheckboxes = (param: string, only?: boolean) => {
    if (only) {
      setCheckboxes((prev: ICheckboxes) => ({
        ...prev,
        'only': param,
      }));
    } else {
      setCheckboxes((prev: ICheckboxes) => ({
        ...prev,
        [param]: !prev[param as keyof typeof prev]
      }));
    }
  };

  const value = {
    currency,
    checkboxes,
    setCurrency,
    handleCheckboxes,
    rates,
  };

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  )
}


