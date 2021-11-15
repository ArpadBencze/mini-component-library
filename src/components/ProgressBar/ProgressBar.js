/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small:{
    '--height': 8 + 'px',
    '--padding': 0 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium:{
    '--height': 12 + 'px',
    '--padding': 0 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px',
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size]
  const width = 370;

  return (
    <ProgressBarWrapper style={{...styles, width}} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <BarWrapper>
        <Progress style={styles} progress={value} />
      </BarWrapper>
    </ProgressBarWrapper>
  )
};


const Progress = styled.div`
  width: ${p => p.progress}%;
  height: calc(var(--height) - 2 * var(--padding));
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`

const BarWrapper = styled.div`
   border-radius: 4px;
  overflow: hidden;

`

const ProgressBarWrapper = styled.div`
  width: ${p => p.width}px;
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  overflow: hidden;
`

export default ProgressBar;
