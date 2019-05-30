import React from "react";
import StyledNightmode from './styles/StyledNightmode';


const Nightmode = ({nightmodeCallback, nightmode}) => (

   <StyledNightmode>
   <span>Nightmode: </span>
   <label classname="switch">
   <input type="checkbox" checked={nightmode} onchange={nightmodeCallback} />
   <span classname="slider round" />
   </label>
        Nightmode
   </StyledNightmode>

);



export default Nightmode;