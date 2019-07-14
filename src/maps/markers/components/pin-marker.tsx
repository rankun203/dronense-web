import React from 'react';
import { Marker } from 'react-map-gl';

export interface ILayerMarkerProps {
  lat: number;
  lng: number;
  PinElement: React.ReactElement;
}

export const PinMarker: React.FC<ILayerMarkerProps> = props => {
  const { lat, lng, PinElement } = props;
  return (
    <Marker latitude={lat} longitude={lng}>
      {PinElement}
    </Marker>
  );
};
