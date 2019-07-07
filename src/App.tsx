import React, { useRef } from 'react';
import styled from 'styled-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import { FFMap } from './map';

const Container = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  const containerRef = useRef(null);
  return (
    <Container ref={containerRef}>
      <FFMap container={containerRef} />
    </Container>
  );
};

export default App;
