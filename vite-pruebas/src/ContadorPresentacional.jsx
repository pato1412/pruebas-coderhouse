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

export function ContadorPresentacional2(params) {
  console.log(params); 
  return (
    <div className="contador">
      <h4>Contador2: {params.valor}</h4>
      <button onClick={params.onIncrement}>Incrementar</button>
      <button onClick={params.onDecrement}>Decrementar</button>
      <button onClick={params.onReset}>Reiniciar</button>
    </div>
  );
}

export function Welcome(props) {
  return <h1>Hola, {props.name}.</h1>;
}
