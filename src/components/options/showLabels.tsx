import * as React from 'react';

interface Props {
  showLabels: boolean;
  handleShowLabels: (any) => void;
}

export const ShowLabels: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" checked={props.showLabels} onChange={props.handleShowLabels} />
      <label className="form-check-label" style={{ 'paddingLeft': '1rem' }}>Show percentage</label>
    </div>
  );
}