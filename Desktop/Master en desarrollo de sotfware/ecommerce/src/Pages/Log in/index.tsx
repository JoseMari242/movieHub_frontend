/*import React, { useEffect, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

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
    setUsers(users); 
    navigate("/home")
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
  const navigate = useNavigate();

  useEffect(() => {
    getApi()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleGoClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClick = (event: React.FormEvent) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    loginUser(email, password, users, onLoginSuccess);
  };

  return (
    <>
      <h1 className='titleLogin'>Horizon Watches</h1>
      <img className='imgLogin' src="src/assets/hands-1866619_1280.webp" alt="" />
      <div className='containerLogin'>
        {showLoginForm ? (
          <form onSubmit={handleLoginClick}>
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
            <button type="submit">LOG IN</button>
          </form>
        ) : (
          <button onClick={handleGoClick}>GO!</button>
        )}
      </div>
    </>
  );
};

export default Login;

function setUsers(users: User[]) {
  throw new Error('Function not implemented.');
}*/

import React, { useEffect, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';

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

/*async function getApi() {    
  try {
    const response = await fetch('src/assets/Data/users.json');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching user data: ' + error.message);
  }
}*/


async function loginUser(email: string, password: string, users: User[], onLoginSuccess: () => void, navigate: any) {
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    navigate("/home");
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
  const navigate = useNavigate();

  useEffect(() => {
    getApi()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleGoClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClick = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    await loginUser(email, password, users, onLoginSuccess, navigate);
  };

  return (
    <>
      <h1 className='titleLogin'>Horizon Watches</h1>
      <img className='imgLogin' src="src/assets/hands-1866619_1280.webp" alt="" />
      <div className='containerLogin'>
        {showLoginForm ? (
          <form onSubmit={handleLoginClick}>
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
            <button type="submit">LOG IN</button>
          </form>
        ) : (
          <button onClick={handleGoClick}>GO!</button>
        )}
      </div>
    </>
  );
};

export default Login;


