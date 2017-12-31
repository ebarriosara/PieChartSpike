import * as React from 'react';
import { Dimension, Margin, DataElement, ColorFunction } from '../domain';
import { Legend } from './legend';
import { Pie } from './pieChart';
import { Options } from './options/index';
import { colorFunctions } from '../const/index';

interface Props {
  view : Dimension;
  margin : Margin;
  data : DataElement[];
}

interface State {
  colors : string[];
  labeled : boolean;
  innerRadius : number;
  colorFunction : ColorFunction;
}

export class PieChartComponent extends React.Component<Props, State> {

  private node;
  private outerRadius : number;

  constructor(props : Props) {
    super(props);    

    this.state = {
      colors: [],
      labeled: false,
      innerRadius: 0,
      colorFunction: colorFunctions[1],
    };

    this.outerRadius = this.props.view.width / 2 - this.props.margin.left * 2;
    let aux = [];
    for (let i = 0; i < this.props.data.length; i++) {
      aux = [...aux, this.state.colorFunction.function(i)];
    }
    
    this.state = { 
      ...this.state,
      colors: aux,
    };
  } 

  highlightArc = (index : number, enableHighlight : boolean) => {
    let aux = [...this.state.colors];
    if (enableHighlight) {
      aux[index] = '#ffff66';
    } else {
      aux[index] = this.state.colorFunction.function(index);
    }
    this.setState({ colors: aux });
  }

  handleShowLabels = (event) => {
    this.setState({ ...this.state, labeled: event.target.checked });
  }

  handleInnerRadius = (event) => {
    this.setState({ ...this.state, innerRadius: event.target.value });
  }

  handleColorFunctionChange = (event) => {
    
    const index = colorFunctions.findIndex(f => f.name === event.target.value);
    
    const newColorFunction = colorFunctions[index];
    let aux = [];
    for (let i = 0; i < this.props.data.length; i++) {
      aux = [...aux, newColorFunction.function(i)];
    }

    this.setState({
      ...this.state, 
      colorFunction: newColorFunction,
      colors: aux,
    });
  }

  render() {
    return (
      <div>
        <svg
          width={this.props.view.width} height={this.props.view.height}>
          <Pie 
            view={this.props.view}
            margin={this.props.margin} 
            innerRadius={this.state.innerRadius} 
            outerRadius={this.outerRadius} 
            data={this.props.data} 
            colors={this.state.colors}
            highlightArc={this.highlightArc}
            labeled={this.state.labeled}
          />
          <Legend 
            colorFunction={this.state.colorFunction.function} 
            data={this.props.data}
            margin={
              {...this.props.margin, 
                left: this.outerRadius * 2 + this.props.margin.left * 2, 
                top: this.props.view.height - this.props.margin.bottom 
              }
            }/>
        </svg>
        <Options 
          showLabels={this.state.labeled} handleShowLabels={this.handleShowLabels}
          innerRadiusValue={this.state.innerRadius} maxInnerRadiusValue={2*this.outerRadius/3} handleInnerRadiusChange={this.handleInnerRadius}
          selectedColorFunction={this.state.colorFunction.name} handleColorFunctionChange={this.handleColorFunctionChange}
        />
      </div>
    );
  }
}