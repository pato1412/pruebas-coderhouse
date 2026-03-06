import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title={"Nuevo curso react"} subtitle={"Comienza el lunes 5 de marzo"} children={Comentario({title:"Este es el contenido del curso"})} />
      <Card title={"Nuevo curso Javascript"} subtitle={"Comienza el martes 15 de marzo"} />
    </>
  )
}

export function Card({ title, subtitle, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export function Comentario({ title }) {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  );
}

export default App
