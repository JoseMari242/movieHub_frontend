
import './App.css'
import Login from './Pages/Log in'



function App() {
 

  return (
    <>


    <div className="login">
    <Login onLoginSuccess={function (): void {
          throw new Error('Function not implemented.')
        } } />
    </div>


    </>
  )
}

export default App
