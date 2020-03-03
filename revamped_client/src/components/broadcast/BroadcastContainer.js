import React, { useEffect } from "react";
import Broadcast from "./Broadcast";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as setRoomIdActions from "../../redux/actions/setRoomIdActions";
import * as addStreamerActions from "../../redux/actions/addStreamerAction";
import { bindActionCreators } from "redux";
import p2pHandler from "../../helpers/helper";

const BroadcastContainer = ({ roomId, init, streamers, params, actions }) => {
  // if the roomid was never defined (if the user enters the url directly in bar will cause this)
  // then set the roomid real quick
  if (roomId === "" && params.roomId !== "") {
    actions.setRoomIdActions(params.roomId);
  }

  const addStreamer = () => {
    actions.addStreamer();
  };

  useEffect(() => {
    const endpoint = "http://localhost:3001/";
    p2pHandler(endpoint, init, roomId, addStreamer);
  }, []);

  return <Broadcast roomId={roomId} streamers={streamers} />;
};

BroadcastContainer.propTypes = {
  roomId: PropTypes.string.isRequired,
  init: PropTypes.bool.isRequired,
  streamers: PropTypes.number.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    roomId: state.roomId,
    init: state.init,
    streamers: state.streamers,
    params: ownProps.match.params
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { ...setRoomIdActions, ...addStreamerActions },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastContainer);
