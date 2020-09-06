import React from 'react'
import './Body.css'
import Header from '../Header/Header'

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default" />
                <div className="body__infoText">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>
        </div>
    )
}

export default Body
