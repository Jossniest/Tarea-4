import React from 'react';
import './App.css';
import Header from './components/cabecera';
import Container from './components/main-container';

function App() {
  return (
    <div className="App">
      <Header titulo="Agenda Version React"/>
      <Container />
      
    </div>
  );
}

export default App;
