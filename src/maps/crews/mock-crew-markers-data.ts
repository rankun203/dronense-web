import { Feature, Point } from 'geojson';
import { IPersonProperties } from './interfaces/i-crew-member';

export const mockCrewsData: Array<Feature<Point, IPersonProperties>> = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0767626, 30.6559596]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Bill',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Healthy',
      movingSpeed: 2,
      movingDirection: 30
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0747626, 30.6579593]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Carel',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Healthy',
      movingSpeed: 1.5,
      movingDirection: 39
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0717626, 30.6529593]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Punk',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Healthy',
      movingSpeed: 2.1,
      movingDirection: 53.5
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0727626, 30.6539593]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Mark',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Unknown',
      movingSpeed: 2.5,
      movingDirection: 45
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0727626, 30.6559593]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Michael',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Healthy',
      movingSpeed: 2,
      movingDirection: 31.5
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0757626, 30.6559593]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Bark',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Healthy',
      movingSpeed: 2,
      movingDirection: 33
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0767626, 30.6559593]
    },
    properties: {
      featureType: 'CrewMember',
      name: 'Bob',
      crew: {
        codeName: 'No.135',
        name: 'GraniteMountain',
        uuid: '00000000000000000000000000000000'
      },
      healthStatus: 'Healthy',
      movingSpeed: 2,
      movingDirection: 37
    }
  }
];
