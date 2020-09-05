import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@material-ui/core'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://m.media-amazon.com/images/I/614eJNoM-+L._SS500_.jpg" className="footer__albumLogo"/>
                <div className="footer__songInfo">
                    <h4>No song is playing</h4>
                    <p>...</p>
                </div>
            </div>

            <div className="footer__center">
               <ShuffleIcon className="footer__green" />
               <SkipPreviousIcon className="footer__icon" />
               <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
               <SkipNextIcon className="footer__icon" />
               <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
