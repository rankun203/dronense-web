import React from 'react';
import { IPopupProps } from './interfaces/i-popup-props';

export interface IPersonPopupData {
  title: string;
  desc: string;
}

export const PersonPopup: React.FC<IPopupProps<IPersonPopupData>> = props => {
  const { data } = props;
  const { title, desc } = data;

  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
