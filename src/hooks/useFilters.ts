import { useContext } from 'react';
import { FiltersContext } from '../components/hoc/filtersContext';

export default function useFilters() {
  return useContext(FiltersContext);
}