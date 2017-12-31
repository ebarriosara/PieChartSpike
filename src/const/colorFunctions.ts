import { scaleOrdinal, schemeCategory20, schemeCategory10, schemeCategory20b } from 'd3-scale';
import { ColorFunction } from '../domain';

export const colorFunctions : ColorFunction[] = [
  {
    name: 'schemeCategory10',
    function: scaleOrdinal(schemeCategory10),
  },
  {
    name: 'schemeCategory20',
    function: scaleOrdinal(schemeCategory20),
  },
  {
    name: 'schemeCategory20b',
    function: scaleOrdinal(schemeCategory20b),
  },
];