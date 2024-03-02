import { useState } from 'react';
import './stylesheets/App.css';
import Login from './components/Login';
import AddAlert from './components/AddAlert';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='app'>
      {isLoggedIn
        ? <AddAlert />
        : <Login 
            setIsLoggedIn={setIsLoggedIn}
          />
      }
    </div>
  )
}

export default App
