import React from 'react';
import _get from 'lodash/get';
import { Feature, Point } from 'geojson';
import { IPersonProperties } from './components/interfaces/i-person';
import { PinMarker } from '../markers/components/pin-marker';
import { PersonPin } from '../components/person-pin';

export interface ICrewsLayerProps {
  crewsData: Array<Feature<Point, IPersonProperties>>;
}

export const CrewsLayer: React.FC<ICrewsLayerProps> = props => {
  const { crewsData } = props;
  return (
    <>
      {crewsData.map(person => {
        const coordinates = _get(person, ['geometry', 'coordinates'], []);
        return (
          <PinMarker
            lat={coordinates[1]}
            lng={coordinates[0]}
            key={`marker-${coordinates[1]}-${coordinates[0]}`}
            PinElement={<PersonPin size={20} />}
          />
        );
      })}
    </>
  );
};
