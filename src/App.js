import React from 'react';
import './App.css';
import Clubby from './components/Clubby'
import Inicio from './components/Inicio';
import Mockups from './components/Mockups';
import Team from './components/Team';
function App() {
  return (
    <div>
      <Clubby />
      <Inicio />
      <Mockups />
      <Team />
    </div>
  );
}

export default App;
