import React from 'react'
import './Player.css'
import Sidebar from '../SideBar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

function Player() {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>

            <Footer />

        </div>
    )
}

export default Player
