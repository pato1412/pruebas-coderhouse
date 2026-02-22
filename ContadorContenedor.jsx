import { useState } from 'react';
import { ContadorPresentacional } from './ContadorPresentacional';

export function ContadorContenedor() {
  // Implementa el estado y funciones aquí
  return (
    <ContadorPresentacional
      valor={0}
      onIncrement={() => {}}
      onDecrement={() => {}}
      onReset={() => {}}
    />
  );
}
