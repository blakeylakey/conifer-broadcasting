import React, { useEffect } from "react";
import Broadcast from "./Broadcast";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as setRoomIdActions from "../../redux/actions/setRoomIdActions";
import * as addStreamerActions from "../../redux/actions/addStreamerAction";
import * as connectActions from "../../redux/actions/connectActions";
import { bindActionCreators } from "redux";
import p2pHandler from "../../helpers/helper";

const BroadcastContainer = ({
  roomId,
  init,
  streamers,
  connect,
  params,
  actions
}) => {
  useEffect(() => {
    const endpoint = window.location.origin;
    // if the roomid was never defined (if the user enters the url directly in bar will cause this)
    // then set the roomid real quick
    if (roomId === "" && params.roomId !== "") {
      actions.setRoomIdActions(params.roomId);
    }
    if (streamers !== 0) {
      actions.setStreamerCount(0);
    }

    p2pHandler(endpoint, init, roomId, actions);
  }, []);

  return <Broadcast roomId={roomId} streamers={streamers} connect={connect} />;
};

BroadcastContainer.propTypes = {
  roomId: PropTypes.string.isRequired,
  init: PropTypes.bool.isRequired,
  streamers: PropTypes.number.isRequired,
  connect: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    roomId: state.roomId,
    init: state.init,
    streamers: state.streamers,
    connect: state.connect,
    params: ownProps.match.params
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { ...setRoomIdActions, ...addStreamerActions, ...connectActions },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastContainer);
