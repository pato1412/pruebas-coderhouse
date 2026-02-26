import { useState } from 'react';
import { ContadorPresentacional, ContadorPresentacional2, Welcome } from './ContadorPresentacional';


export function ContadorContenedor() {
  const [contador, setContador] = useState(0);
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);
  return (
    <ContadorPresentacional
      valor={contador}
      onIncrement={incrementar}
      onDecrement={decrementar}
      onReset={reiniciar}
    />
  );
}

export function ContadorContenedor2() {
  const [contador, setContador] = useState(4);
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);
  return (
    <ContadorPresentacional2
      valor={contador}
      onIncrement={incrementar}
      onDecrement={decrementar}
      onReset={reiniciar}
    />
  );
}

export function Saludo() {
  return (
    <div>
      <Welcome name="Pablo david" age={30} />
    </div>
  );
}

