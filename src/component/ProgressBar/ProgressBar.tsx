import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';

import { ProgressSkin, DraggablePoint, Indicator, ProgressCovered } from './view.js';

interface ProgressBarProps {
  width: number,
  theme: any
};


const ProgressBar = (props: ProgressBarProps) => {
  const { theme: { progressBar: { progressSkin, draggablePoint, indicator, progressCovered } }} = props;
  return (
    <ProgressSkin theme={progressSkin}>
      <DraggablePoint left={props.width}>
        <Indicator theme={indicator}/>
      </DraggablePoint>
      <ProgressCovered width={props.width} theme={progressCovered} />
    </ProgressSkin>
  )
};

export default withTheme(ProgressBar);