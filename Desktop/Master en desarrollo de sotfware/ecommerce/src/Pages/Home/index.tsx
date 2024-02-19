/*import React from 'react'
import Header from '../../Components/Header'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      
      <h1>HOLA, SOY HOME</h1>

      
      
    </div>
  )
}*/

import React, { useContext } from 'react';
import { UserContext } from '../../Context/Users';

export default function Home() {
  const users = useContext(UserContext);

  return (
    <div>
      <h1>Usuarios:</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>Nombre: {user.Name}</div>
            <div>Email: {user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
