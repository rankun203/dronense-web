import React, { useState } from 'react';
import _get from 'lodash/get';
import MapGL from 'react-map-gl';

import { CONFIG } from '../../config';
import { CityMarkersLayer } from './components/city-markers-layer';
import { mockMarkersData } from './mock-data/mock-city-markers-data';

const DEFAULT_VIEW_PORT = {
  latitude: 30.6589591,
  longitude: 104.0797628,
  zoom: 8
};

export interface ISimpleMapProps {
  container: React.MutableRefObject<null>;
}

export const SimpleMarkers: React.FC<ISimpleMapProps> = props => {
  const { container } = props;

  const width = _get(container, 'current.offsetWidth', 400);
  const height = _get(container, 'current.offsetHeight', 400);

  const [state, updateState] = useState({
    viewport: DEFAULT_VIEW_PORT
  });

  return (
    <MapGL
      {...state.viewport}
      width={width}
      height={height}
      mapboxApiAccessToken={CONFIG.API_KEY}
      onViewportChange={viewport => updateState({ viewport } as any)}
    >
      <CityMarkersLayer markersData={mockMarkersData} />
      <button
        onClick={() =>
          updateState({ viewport: { ...state.viewport, zoom: 12 } })
        }
      >
        Change
      </button>
    </MapGL>
  );
};
