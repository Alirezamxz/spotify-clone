import React from 'react'
import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../../states/DataLayer'

function SideBar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    debugger
    console.log(playlists)

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"alt="spotify-logo"/>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <strong className="sidebar__title">Playlists</strong>
            <hr />
            
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default SideBar
