import React from "react";

import HomeNavMenu from "./HomeNavMenu";
import RoomNavMenu from "./RoomNavMenu";

function NavMenu(props) {
    if (props.home) {
        return <HomeNavMenu />
    }
    else if (props.room) {
        return <RoomNavMenu />
    }
    else {
        return <RoomNavMenu fixed />
    }
}

export default NavMenu;