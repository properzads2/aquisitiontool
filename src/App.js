import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';

function App() {
  return (
    
      <div className = "wrapper">
                
                <div align="center" style={{border: '4px solid red',borderRadius: '4', borderWidth: 0.5, fontSize:59, fontWeight:'bold', color:'Green' }} >
                   Aquisition Management Tool
                </div>

      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
