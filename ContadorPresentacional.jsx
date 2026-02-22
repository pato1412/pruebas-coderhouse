export function ContadorPresentacional({ valor, onIncrement, onDecrement, onReset }) {
  return (
    <div className="contador">
      <h2>Contador: {valor}</h2>
      <button onClick={onIncrement}>Incrementar</button>
      <button onClick={onDecrement}>Decrementar</button>
      <button onClick={onReset}>Reiniciar</button>
    </div>
  );
}