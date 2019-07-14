import React from 'react';
import { Marker } from 'react-map-gl';
import { Feature, Point } from 'geojson';
import _get from 'lodash/get';
import { TCityMarkerProperties } from '../../models/i-city-marker-properties';
import { CityPin } from '../../components/city-pin';
import { PinMarker } from './pin-marker';

export interface ICityMarkersLayerProps {
  markersData: Array<Feature<Point, TCityMarkerProperties>>;
}

export const CityMarkersLayer: React.FC<ICityMarkersLayerProps> = props => {
  const { markersData } = props;
  return (
    <>
      {markersData.map(marker => {
        const coordinates = _get(marker, ['geometry', 'coordinates'], []);
        return (
          <PinMarker
            lat={coordinates[1]}
            lng={coordinates[0]}
            key={`marker-${coordinates[1]}-${coordinates[0]}`}
            PinElement={<CityPin size={20} />}
          >
            <CityPin size={20} />
          </PinMarker>
        );
      })}
    </>
  );
};
