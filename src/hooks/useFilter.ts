import { useContext } from 'react';
import { FiltersContext } from './filtersContext';

export default function useFilter() {
  return useContext(FiltersContext);
}