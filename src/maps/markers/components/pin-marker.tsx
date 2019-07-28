import React from 'react';
import { Marker } from 'react-map-gl';

export interface ILayerMarkerProps {
  lat: number;
  lng: number;
  PinElement: React.ReactElement;
  onClick?: () => void;
}

export const PinMarker: React.FC<ILayerMarkerProps> = props => {
  const { lat, lng, PinElement, onClick } = props;
  return (
    <Marker latitude={lat} longitude={lng}>
      {PinElement}
    </Marker>
  );
};
