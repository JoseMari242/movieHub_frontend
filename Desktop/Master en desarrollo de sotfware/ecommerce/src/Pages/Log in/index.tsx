import React from 'react'
import Header from '../../Components/Header'


type Props = {}



export default function Login({}: Props) {

  const handleLoginClick = () => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    console.log('Se ha hecho clic en el botón de inicio de sesión');
  };

  return (
    <div>
      

      <button onClick={handleLoginClick}>Log in</button>

    </div>
  )
}