import React, { useEffect } from "react";
import SearchBarContainer from "./SearchBarContainer";

const CastLayout = props => {
  const path = props.location.pathname.split("/")[1];
  const roomId = props.match.params.roomId;

  return (
    <>
      <SearchBarContainer type={path} />
    </>
  );
};

export default CastLayout;
