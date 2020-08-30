import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import { getTokenFromUrl } from './spotify'

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      setToken(_token)
    }
  } ,[])

  return (
    <div className="app">
      {
        token ? ( <Player /> ) : ( <Login /> )
      }
    </div>
  );
}

export default App;

// https://youtu.be/pnkuI8KXW_8?t=4819