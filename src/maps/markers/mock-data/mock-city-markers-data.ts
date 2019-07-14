import { Feature, Point } from 'geojson';
import { TCityMarkerProperties } from '../../models/i-city-marker-properties';

export const mockMarkersData: Array<Feature<Point, TCityMarkerProperties>> = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.0797628, 30.6589591]
    },
    properties: {
      featureType: 'City',
      city: 'New York',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.3021392822, 30.519681272749402]
    },
    properties: {
      featureType: 'City',
      city: 'Los Angeles',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.2712402344, 30.48122525666875]
    },
    properties: {
      featureType: 'City',
      city: 'Chicago',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.327545166, 30.537425073997134]
    },
    properties: {
      featureType: 'City',
      city: 'Houston',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.236907959, 30.41611122701556]
    },
    properties: {
      featureType: 'City',
      city: 'Phoenix',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.3069458008, 30.43801807352744]
    },
    properties: {
      featureType: 'City',
      city: 'Philadelphia',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [104.1799163818, 30.326063950143894]
    },
    properties: {
      featureType: 'City',
      city: 'Dallas',
      population: '8,175,133',
      image:
        'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
      state: 'New York'
    }
  }
];
