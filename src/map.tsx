import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';

import { CONFIG } from './config';
// import { useInterval } from './use-interval';

export interface IFFMapProps {
  container: React.MutableRefObject<null>;
}

// function redraw() {
//   // const [cx, cy] = project([-122, 37]);
//   return <circle cx={28.5295028} cy={101.2251941} r={6} fill="blue" />;
// }

export const FFMap: React.FC<IFFMapProps> = props => {
  const {
    container: { current: parent }
  } = props;

  const width = (parent && (parent as any).offsetWidth) || 400;
  const height = (parent && (parent as any).offsetHeight) || 400;

  const [state, updateState] = useState({
    viewport: {
      latitude: 28.5295028,
      longitude: 101.2251941,
      zoom: 14
    }
  });

  // useInterval(() => {
  //   const currentZoom = state.viewport.zoom;
  //   const targetZoom = currentZoom <= 3 ? 3 : currentZoom - 1;
  //   updateState({
  //     ...state,
  //     viewport: { ...state.viewport, zoom: targetZoom }
  //   });
  //   console.log(`targetZoom(${Date.now()})`, targetZoom);
  // }, 3000);

  // Data to be used by the LineLayer
  const data = [
    {
      sourcePosition: [-122.41669, 37.7853],
      targetPosition: [-122.41669, 37.781]
    }
  ];
  const layers = [new LineLayer({ id: 'line-layer', data })];
  return (
    // <DeckGL
    //   viewState={state.viewport}
    //   width={width}
    //   height={height}
    //   layers={layers}
    //   controller={true}
    // >
    <ReactMapGL
      {...state.viewport}
      width={width}
      height={height}
      mapboxApiAccessToken={CONFIG.API_KEY}
      onViewportChange={viewport => updateState({ viewport } as any)}
    />
    // </DeckGL>
  );
};
