import React from "react";
import Playlist from "./containers/Playlist";
import StyledPlaylistHeader from "./styles/StyledPlaylistHeader";
import StyledJourney from "./styles/StyledJourney";

const PlayListHeader = ({active, total}) =>
  <StyledPlaylistHeader>
    <p>
      {" "}{active.title}{" "}
    </p>
    <StyledJourney>
      {" "}{active.num} / {total}
    </StyledJourney>
  </StyledPlaylistHeader>;

export default PlayListHeader;
