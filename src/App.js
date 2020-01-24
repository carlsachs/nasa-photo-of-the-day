import React from "react";
import "./App.css";
import Grid from "./components/grid";
import styled from 'styled-components';

const DivWrap = styled.div `
    width: 70%;
    margin: 0 auto;
    border: 1px solid black;
`;


function App() {
  return (
    <div className="App">
      <p>
        This is my Nasa Picture Site
      </p>
      <DivWrap>
      
      <h2>Picture of the day</h2>
      <Grid />

      
      </DivWrap>
    </div>
  );
}

export default App;
