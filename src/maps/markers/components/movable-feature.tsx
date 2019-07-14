import React from 'react';
import { IPinProps } from '../../components/interfaces/i-pin-props';

export interface IMovableFeatureProps {
  PinElement: React.FC<IPinProps>;
  pinProps: IPinProps;
}

export const MovableFeature: React.FC<IMovableFeatureProps> = props => {
  const { PinElement, pinProps } = props;
  return <PinElement {...pinProps} />;
};
