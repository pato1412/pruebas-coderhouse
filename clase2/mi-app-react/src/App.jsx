/*
Ejercicio: Construir una aplicación React sencilla que:
- Use componentes reutilizables Card y ListItem
- Gestione estado local con useState
- Cargue datos asíncronos con Promises en useEffect
- Renderice listas dinámicas con map y keys
- Manipule el DOM con useRef

Completa el código para que la aplicación funcione según lo descrito.
*/

import React, { useState, useEffect, useRef } from 'react';

// Componente Card reutilizable
function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Componente ListItem reutilizable
function ListItem({user}) {
  return (
    <li style={{ margin: '0.5rem 0' }}>
      <strong>{user.name}</strong> - {user.email}
    </li>
  );
}

function App() {
  // Estado local para usuarios
  const [users, setUsers] = useState([]);

  // Referencia para el input
  const inputRef = useRef(null);

  // useEffect para cargar datos asíncronos
  useEffect(() => {
    // Simular llamada a API con Promise
    const fetchUsers = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Ana Pérez', email: 'ana.perez@example.com' },
          { id: 2, name: 'Luis Gómez', email: 'luis.gomez@example.com' },
          { id: 3, name: 'María López', email: 'maria.lopez@example.com' },
        ]);
      }, 2000);
    });

    fetchUsers.then(data => {
      setUsers(data);
      // Enfocar input al cargar datos
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  }, []);

  return (
    <Card title="Lista de Usuarios">
      <input ref={inputRef} placeholder="Buscar usuario..." />
      <ul>
        {users.map(user => (
          <ListItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
}

export default App;
