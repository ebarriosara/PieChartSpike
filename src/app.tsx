import * as React from 'react';
import { PieChartComponent } from './components';
import { DataElement, Dimension, Margin } from './domain';

const data: DataElement[] = [
  { name: 'Element 1', value: 100 },
  { name: 'Element 2', value: 200 },
  { name: 'Element 3', value: 300 },
  { name: 'Element 4', value: 250 },
  { name: 'Element 5', value: 550 },
  { name: 'Element 6', value: 175 },
];
const view: Dimension = { width: 500, height: 400 };
const margin: Margin = { top: 0, right: 350, bottom: 200, left: 50 };

export const App = () => (
  <div>
    <PieChartComponent 
      view={view} 
      margin={margin} 
      data={data} 
    />
  </div>
);