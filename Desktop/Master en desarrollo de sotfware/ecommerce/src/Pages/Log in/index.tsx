import React, { useState } from 'react';
import Header from '../../Components/Header'


type Props = {
  onLoginSuccess: () => void;
};


async function getApi() {
try {
  const data = await fetch('src/assets/Data/users.json');
  const JSONdata = await data.json();
  console.log(JSONdata)

} catch (error) {
  
}

}

getApi()

export default function Login({ onLoginSuccess }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = () => {
    // Aquí puedes agregar la lógica para el inicio de sesión
    if (email === 'usuario@example.com' && password === 'contraseña') {
      // Simulación de inicio de sesión exitoso
      console.log('Inicio de sesión exitoso');
      onLoginSuccess(); // Llama a la función proporcionada por el padre para indicar que el inicio de sesión ha sido exitoso
    } else {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      <div className='containerLogin'>
        <h1 className='TitleLogin'>Tienda de relojes</h1>
        <img className='imgLogin' src="" alt="" />
        
        <div className='inputUser'>
          <input 
            id="email"
            type="email" 
            name="inputEmail"
            className='inputLogin'
            autoComplete='off'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='inputPassword'>
          <input 
            id="pass"
            type="password"
            name="inputPass" 
            className='inputLogin'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className="error">{error}</p>
        <button onClick={handleLoginClick}>Log in</button>
      </div>
    </>
  );
}
