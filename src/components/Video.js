import React from "react";
import ReactPlayer from 'react-player';
import StyledVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';


const Video = ({active, endCallback,  autoplay, progressCallback }) => (

   <StyledVideo>
   <StyledVideoWrapper>
   <ReactPlayer
   width="100%"
   height="100%"
   style={{ position: "absolute", top: "0"}}
   playing={autoplay}
   />
   </StyledVideoWrapper>

   </StyledVideo>

);



export default Video;