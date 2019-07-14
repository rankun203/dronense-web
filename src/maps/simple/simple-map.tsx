import React, { useState } from 'react';
import _get from 'lodash/get';
import ReactMapGL from 'react-map-gl';

import { CONFIG } from '../../config';

export interface ISimpleMapProps {
  container: React.MutableRefObject<HTMLDivElement>;
}

export const SimpleMap = (props: ISimpleMapProps) => {
  const { container } = props;

  const width = _get(container, 'current.offsetWidth', 400);
  const height = _get(container, 'current.offsetHeight', 400);

  const [state, updateState] = useState({
    viewport: {
      latitude: 28.5295028,
      longitude: 101.2251941,
      zoom: 14
    }
  });

  return (
    <ReactMapGL
      {...state.viewport}
      width={width}
      height={height}
      mapboxApiAccessToken={CONFIG.API_KEY}
      onViewportChange={viewport => updateState({ viewport } as any)}
    />
  );
};
