import './App.css';
import AppRouter from './routes';
import { Auth0Provider } from '@auth0/auth0-react';

const {
  VITE_AUTH0_DOMAIN: domain,
  VITE_AUTH0_CLIENT_ID: clientId,
  VITE_AUTH0_AUDIENCE: audience,
} = import.meta.env;


const redirectUri = window.location.origin + "/home"
function App() {
  
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: redirectUri,
      audience: audience
    }}
  >
        <AppRouter/>
        </Auth0Provider>
         
    
  );
}

export default App;