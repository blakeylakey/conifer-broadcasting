import React from "react";
import SearchBarContainer from "./SearchBarContainer";

const CastLayout = props => {
  const path = props.location.pathname.split("/")[1];

  return (
    <>
      <SearchBarContainer type={path} />
    </>
  );
};

export default CastLayout;
