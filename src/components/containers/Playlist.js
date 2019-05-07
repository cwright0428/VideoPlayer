import React from "react";
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItem from '../PlaylistItem';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';


const Playlist = props => (

      <StyledPlaylist>
      <Nightmode />
      <PlaylistHeader />
      <PlaylistItem />
      </StyledPlaylist>

);



export default Playlist;