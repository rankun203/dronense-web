import React from 'react';
import _get from 'lodash/get';
import { Feature, Point } from 'geojson';
import { IPersonProperties } from '../interfaces/i-crew-member';
import { PinMarker } from '../../markers/components/pin-marker';
import { PersonPin, IPersonDataTag } from '../../components/person-pin';
import { IDataTags } from '../../components/interfaces/i-data-tags';
import { PersonPopup, TPopupData } from '../../components/person-popup';
import { CPopup } from '../../components/popup';
// import { useOnOutsideClick } from '../../components/hooks/use-outer-click-notifier';

export interface ICrewsLayerProps {
  crewsData: Array<Feature<Point, IPersonProperties>>;
}

export const CrewsLayer: React.FC<ICrewsLayerProps> = props => {
  const { crewsData } = props;
  const [popupData, updatePopupData] = React.useState<TPopupData | null>(null);
  // const popupRef = React.useRef(null);

  // const { innerBorderRef } = useOnOutsideClick(() => updatePopupData(null));

  return (
    <>
      {crewsData.map(person => {
        const { geometry, properties } = person;
        const coordinates = _get(geometry, 'coordinates', []);
        const movingDirection = _get(properties, 'movingDirection', 0);
        const movingSpeed = _get(properties, 'movingSpeed', 0);
        const healthStatus = _get(properties, 'healthStatus', 'Unknown');
        // TODO: Use direction, speed
        const dataTags: IDataTags<IPersonDataTag> = {
          movingDirection: {
            name: 'movingDirection',
            value: `${movingDirection}`
          },
          movingSpeed: {
            name: 'movingSpeed',
            value: `${movingSpeed}`
          },
          healthStatus: {
            name: 'healthStatus',
            value: `${healthStatus}`
          }
        };
        return (
          <PinMarker
            lat={coordinates[1]}
            lng={coordinates[0]}
            key={`marker-${coordinates[1]}-${coordinates[0]}`}
            PinElement={
              <PersonPin
                dataTags={dataTags}
                onClick={() => updatePopupData(person)}
              />
            }
          />
        );
      })}
      {popupData && (
        <CPopup
          tipSize={5}
          anchor="top"
          longitude={popupData.geometry.coordinates[0]}
          latitude={popupData.geometry.coordinates[1]}
          onClose={() => updatePopupData(null)}
          closeOnClick={true}
          // ref={innerBorderRef as any}
        >
          <PersonPopup data={popupData} />
        </CPopup>
      )}
    </>
  );
};
