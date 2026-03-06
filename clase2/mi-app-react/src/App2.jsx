import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App1() {
  return (
    <>
      <Formulario />
    </>
  )
}

// Componente reutilizable InputField que recibe label, value, onChange y ref para el input
function InputField({ label, value, onChange, inputRef }) {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
}

// Componente principal Formulario
export function Formulario() {
  // TODO: Definir estados para nombre y email usando useState
  const [strNombre, SetStrNombre] = useState("");
  const [strEmail, SetStrEmail] = useState("");
  const [strError, SetError] = useState("");
  const [objPrueba, SetPrueba] = useState({nombre:'Pablo', apellido:'Benitez'});

  // TODO: Crear referencia para el input nombre usando useRef
  const RefNombre = useRef();
  const RefEmail = useRef();

  const CambiaNombre = (e) => {
    SetStrNombre(e.target.value);
  }

  const CambiaEmail = (e) => {
    SetStrEmail(e.target.value);
  }

  // TODO: Función para manejar el submit del formulario
  const SubmitForm = (e) => {
    e.preventDefault();

    if (validarCampos() == true){
      alert("Formulario Terminado")      
    }

    return false;
  }

  // TODO: Validar que los campos no estén vacíos
  const validarCampos = () => {
    //Reseteo el mensaje de error
    SetError("");

    if( strNombre == ""){
      SetError("Por favor ingrese un nombre");
      RefNombre.current.focus();
      return false;
    }

    if( strEmail == ""){
      SetError("Por favor ingrese un email");
      RefEmail.current.focus();
      return false;
    }

    return true;
  }

  // TODO: Si hay error, enfocar el input nombre usando la referencia

  // TODO: Renderizar InputField para nombre y email
  // TODO: Mostrar mensaje de error si existe

  return (
    <form onSubmit={SubmitForm}>
      <div className='Contenedor'>
        <InputField label={"Nombre"} value={strNombre} onChange={CambiaNombre}  inputRef={RefNombre}  />
      </div>
      <div className='Contenedor'>
        <InputField label={"Email"} value={strEmail} onChange={CambiaEmail}  inputRef={RefEmail}  />
      </div>
      <button type="submit">Enviar</button>
      <p>{strError/* TODO: Mostrar mensaje de error si aplica */}</p>
      <p>{objPrueba.nombre + " - " + objPrueba.apellido}</p>
    </form>
  );
}

export default App1
