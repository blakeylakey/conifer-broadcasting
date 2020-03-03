import React, { useEffect } from "react";
import Broadcast from "./Broadcast";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as setRoomIdActions from "../../redux/actions/setRoomIdActions";
import { bindActionCreators } from "redux";
import p2pHandler from "../../helpers/helper";

const BroadcastContainer = ({ roomId, init, params, actions }) => {
  // if the roomid was never defined (if the user enters the url directly in bar will cause this)
  // then set the roomid real quick
  if (roomId === "" && params.roomId !== "") {
    actions.setRoomIdActions(params.roomId);
  }

  useEffect(() => {
    const endpoint = "http://localhost:3001/";
    p2pHandler(endpoint, init, roomId);
  }, []);

  return <Broadcast roomId={roomId} />;
};

BroadcastContainer.propTypes = {
  roomId: PropTypes.string.isRequired,
  init: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    roomId: state.roomId,
    init: state.init,
    params: ownProps.match.params
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(setRoomIdActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BroadcastContainer);
