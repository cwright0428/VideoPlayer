import React from "react";
import Video from "../Video";
import Playlist from "../containers/Playlist";
import { ThemeProvider } from "styled-components";
import StyledMainPlayer from "../styles/StyledWbnPlayer";

const theme = {
  bgcolor: "#353535",
  bgcoloritem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "fff"
};
const themeLight = {
  bgcolor: "#fff",
  bgcoloritem: "#fff",
  bgcolorItemActive: "#887b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535 ",
  borderPlayed: "none",
  color: "#353535"
};

const MainPlayer = props => {
  const nightmodeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightmode ? theme : themeLight}>
    {state.videos !== null ?(
      <StyledMainPlayer>
        <Video
        active={state.activeVideo}
        autoplay={state.autoplay}
        endCallback={endCallback}
        progressCallback={progressCallback}
        />
        <Playlist
        videos={state.videos}
        active={state.activeVideo}
        nightmodeCallback={nightmodeCallback}
        nightmode={state.nightmode}
        />
      </StyledMainPlayer>
    )  : null}
    </ThemeProvider>
  );
};

export default MainPlayer;
