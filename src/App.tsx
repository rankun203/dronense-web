import React, { useRef } from 'react';
import styled from 'styled-components';
import './App.css';
import { SimpleMap, SimpleMarkers } from './maps';

const Container = styled.div`
  height: 100vh;
`;

const App: React.FC = () => {
  const containerRef = useRef(null);
  return (
    <Container ref={containerRef}>
      {/* <SimpleMap container={containerRef} /> */}
      <SimpleMarkers container={containerRef} />
    </Container>
  );
};

export default App;
