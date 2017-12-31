import * as React from 'react';

interface Props {
  innerRadiusValue: number;
  maxValue: number;
  handleInnerRadiusChange: (any) => void;
}

export const InnerRadiusSlider : React.StatelessComponent<Props> = (props : Props) => {
  return(
    <div>
      <label>Inner Radius:</label>
      <input
        type="range"
        value={props.innerRadiusValue}
        min={0}
        max={props.maxValue}
        onInput={props.handleInnerRadiusChange}
        step={1} />
    </div >
  );
}