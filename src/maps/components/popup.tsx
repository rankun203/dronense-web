import styled from 'styled-components';
import { Popup } from 'react-map-gl';

export const CPopup = styled(Popup)`
  .mapboxgl-popup-content {
    padding: 0;
  }

  .mapboxgl-popup-close-button {
    background-color: #f44336;
    width: 32px;
    height: 32px;
    font-size: 24px;
  }
`;
