import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContadorContenedor, ContadorContenedor2, Saludo } from './ContadorContenedor';

function App() {
  return (
    <div className="App">
      <Saludo />
      <h1>Mi Aplicación con 2 Contadores live</h1>
      <ContadorContenedor />
      <hr/>
      <ContadorContenedor2 />
    </div>
  );
}

export default App
