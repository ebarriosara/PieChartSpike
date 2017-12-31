import * as React from 'react';
import { select } from 'd3-selection';
import { DataElement, Margin } from '../../domain';

interface Props {
  colorFunction: any;
  margin: Margin;
  data: DataElement[];
}

const rectSize = 10;
const space = 8;

export class Legend extends React.Component<Props, {}> {

  private node;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.createLegend()
  }

  componentDidUpdate() {
    this.updateLegend()
  }

  createLegend = () => {

    const chart = select(this.node);
    const legend = chart.selectAll('.legend')
      .data(this.props.colorFunction.domain())
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => {
        var height = rectSize + space;
        var offset = height * this.props.colorFunction.domain().length / 2;
        var vert = i * height - offset;
        return `translate(${this.props.margin.left},${vert + this.props.margin.top})`;
      });

    this.addRectsAndTexts(legend);
  };

  addRectsAndTexts = (legend) => {

    legend.append('rect')
      .attr('width', rectSize)
      .attr('height', rectSize)
      .style('fill', this.props.colorFunction)
      .style('stroke', this.props.colorFunction);

    legend.append('text')
      .attr('x', rectSize + space)
      .attr('y', rectSize)
      .text((i: number) => this.props.data[i].name);
  }

  updateLegend = () => {

    const chart = select(this.node);

    const legend = chart.selectAll('.legend')
      .data(this.props.colorFunction.domain());

    legend.selectAll('rect').remove();
    legend.selectAll('text').remove();
    legend.exit().remove();

    legend.enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => {
        var height = rectSize + space;
        var offset = height * this.props.colorFunction.domain().length / 2;
        var vert = i * height - offset;
        return `translate(${this.props.margin.left},${vert + this.props.margin.top})`;
      });

    this.addRectsAndTexts(legend);
  }

  render() {
    return (
      <g ref={node => this.node = node}></g>
    );
  }

}