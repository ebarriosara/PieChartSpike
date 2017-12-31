import * as React from 'react';
import { ShowLabels } from './showLabels';
import { InnerRadiusSlider } from './innerRadiusSlider';
import { ColorFunctionSelection } from './colorFunctionSelection';

interface Props {
  showLabels: boolean;
  innerRadiusValue: number;
  maxInnerRadiusValue: number;
  selectedColorFunction: any;
  handleShowLabels: (any) => void;
  handleInnerRadiusChange: (any) => void;
  handleColorFunctionChange: (any) => void;
}

export const Options : React.StatelessComponent<Props> = (props: Props)  => {
  return (
    <form>
      <ShowLabels
        showLabels={props.showLabels}
        handleShowLabels={props.handleShowLabels} />
      <InnerRadiusSlider
        innerRadiusValue={props.innerRadiusValue}
        maxValue={props.maxInnerRadiusValue}
        handleInnerRadiusChange={props.handleInnerRadiusChange} />
      <ColorFunctionSelection
        selectedColorFunction={props.selectedColorFunction}
        handleColorFunctionChange={props.handleColorFunctionChange} />
    </form>
  );
}