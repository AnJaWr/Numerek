import React from "react";
import './App.css';
import InspirujacyCytat from './InspirujacyCytat';
import Numerek from './Numerek'
import { Container, Row } from 'react-grid-system';


const App = () => {
    return (
    <Container className="App">
      <Row>
   <InspirujacyCytat />
  <Numerek />
   </Row>
    </Container>
  );

    }
export default App;
