import * as React from 'react';
import { arc } from 'd3-shape';

interface Props {
  data: any;
  color: string;
  innerRadius: number;
  outerRadius: number;
  label : string;
}

export class Arc extends React.Component<Props, {}> {

  protected arc;

  constructor(props: Props) {
    super(props);
    this.arc = arc()
      .innerRadius(props.innerRadius)
      .outerRadius(props.outerRadius);
  }

  updateArc() {
    this.arc = arc()
      .innerRadius(this.props.innerRadius)
      .outerRadius(this.props.outerRadius);
  }

  addLabels = () => {

    if (this.props.label !== null && this.props.label.length > 1) {

      const [labelX, labelY] = this.arc.centroid(this.props.data);
      const labelTranslate = `translate(${labelX}, ${labelY})`;

      return(
        <text className='arcText'
          transform={labelTranslate}
          textAnchor="middle"
          style={{ fill: '#444444' }}>
          {this.props.label}
        </text>
      );
    }

    return;
  }

  render() {
    
    this.updateArc();

    return (
      <g>
        <path className='arc'
          d={this.arc(this.props.data)}
          style={{ fill: this.props.color }}>
        </path>
        {this.addLabels()}
      </g>
    );
  }
}