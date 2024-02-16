/*import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import './login.css'

type User = {
  email: string;
  password: string;
};

type Props = {
  onLoginSuccess: () => void;
};

async function getApi() {
  try {
    const data = await fetch('src/assets/Data/users.json');
    const JSONdata: User[] = await data.json();
    return JSONdata;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}

async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void ) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    console.log('Inicio de sesión exitoso');
    alert('¡Ha iniciado sesión!');
    onLoginSuccess();
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
}

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getApi()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleLoginClick = () => {
    loginUser(email, password, users, onLoginSuccess);
  };

  return (
    <>
    <h1 className='TitleLogin'>Horizon Watches</h1>
    <img className='imgLogin' src="src/assets/hands-1866619_1280.webp" alt="" />
      <div className='containerLogin'>
        
        
        
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
        
        <button>GO!</button>
        <button onClick={handleLoginClick}>LOG IN</button>
      </div>
    </>
  );
};

export default Login;*/

import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import './login.css'

type User = {
  email: string;
  password: string;
};

type Props = {
  onLoginSuccess: () => void;
};

async function getApi() {
  try {
    const data = await fetch('src/assets/Data/users.json');
    const JSONdata: User[] = await data.json();
    return JSONdata;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}

async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void ) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    console.log('Inicio de sesión exitoso');
    alert('¡Ha iniciado sesión!');
    onLoginSuccess();
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
}

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    getApi()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleGoClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClick = () => {
    loginUser(email, password, users, onLoginSuccess);
  };

  return (
    <>
      <h1 className='titleLogin'>Horizon Watches</h1>
      <img className='imgLogin' src="src/assets/hands-1866619_1280.webp" alt="" />
      <div className='containerLogin'>
        {showLoginForm ? (
          <>
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
            <button onClick={handleLoginClick}>LOG IN</button>
          </>
        ) : (
          <button onClick={handleGoClick}>GO!</button>
        )}
      </div>
    </>
  );
};

export default Login;


