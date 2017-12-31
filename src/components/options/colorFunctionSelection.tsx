import * as React from 'react';
import { colorFunctions } from '../../const/index';

interface Props {
  selectedColorFunction: string;
  handleColorFunctionChange: (any) => void;
}

export class ColorFunctionSelection extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  renderRadioButton = (index : number) => {
    return (
      <div key={`radio-${index}`} className="radio">
        <label>
          <input type="radio" value={colorFunctions[index].name}
            checked={this.props.selectedColorFunction === colorFunctions[index].name}
            onChange={this.props.handleColorFunctionChange} />
          {colorFunctions[index].name}
        </label>
      </div>
    );
  }

  render() {
    return(
      <div>
        <label style={{ 'paddingTop': '1rem' }}>Color function:</label>
        <br />
        {colorFunctions.map((f, i) => this.renderRadioButton(i))}
      </div>
    );
  }

}