import * as React from 'react';
import { pie } from 'd3-shape';
import { select } from 'd3-selection';
import { Arc } from './arc';
import { Margin, DataElement, Dimension } from '../../domain';

interface Props {
  view: Dimension;
  margin: Margin;
  innerRadius: number;
  outerRadius: number;
  data: DataElement[];
  colors : string[];
  highlightArc : (number, boolean) => void;
  labeled : boolean;
}

export class Pie extends React.Component<Props, {}> {

  private pie;
  private node;
  private totalValue;

  constructor(props: Props) {
    super(props);

    this.pie = pie<DataElement>()
      .value(d => d.value);
  }

  componentDidMount() {
    this.setEventHandling();
  }

  componentWillMount() {
    this.calculateTotalValue();
  }

  componentDidUpdate() {
    this.setEventHandling();
  }

  componentWillUpdate() {
    this.calculateTotalValue();
  }

  calculateTotalValue = () => {
    const values : number[] = this.props.data.map(d => d.value);
    this.totalValue = values.reduce((d, total) => d + total);
  }

  setEventHandling = () => {

    const chart = select(this.node);

    chart.selectAll('.arc')
      .on('mouseover', (d, i) => {
        this.props.highlightArc(i, true);
      })
      .on('mouseout', (d, i) => {
        this.props.highlightArc(i, false);
      });
  }

  arcGenerator(d: DataElement, i: number) {

    let label = null;
    if (this.props.labeled) {
      const value : number = (d.value/this.totalValue)*100;
      if (value > 8) {
        label = `${value.toFixed(2)}%`;
      }
    }

    return (
      <Arc key={`arc-${i}`}
        data={d}
        innerRadius={this.props.innerRadius}
        outerRadius={this.props.outerRadius}
        color={this.props.colors[i]}
        label={label}
      />
    );
  }

  render() {

    const pie = this.pie(this.props.data);
    const translate = `translate(${this.props.margin.left + this.props.outerRadius}, ${this.props.view.height - this.props.margin.bottom})`;

    return (
      <g
        ref={node => this.node = node}
        transform={translate}>
        {pie.map((d, i) => this.arcGenerator(d, i))}
      </g>
    );
  }

} 