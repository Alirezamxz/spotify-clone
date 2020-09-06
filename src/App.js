import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Player from './components/Player/Player'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './states/DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      // user
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcTMQQqg1CAFG').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })

    }
  } ,[token, dispatch])

  return (
    <div className="app">
      {
        token ? ( <Player spotify={spotify} /> ) : ( <Login /> )
      }
    </div>
  );
}

export default App