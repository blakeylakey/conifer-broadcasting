import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import * as setRoomIdActions from "../../redux/actions/setRoomIdActions";
import * as initiatorActions from "../../redux/actions/initiatorActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const SearchBarContainer = ({ roomId, type, actions }) => {
  useEffect(() => {
    // effects for the hover on the search bar - brings up the warning for browser compatibility on hover
    document
      .getElementById("cast-search-bar-input")
      .addEventListener("mouseover", () => {
        document
          .getElementById("cast-search-bar-warning")
          .classList.add("displayed");
      });
    /* document
      .getElementById("cast-search-bar-input")
      .addEventListener("mouseout", () => {
        document
          .getElementById("cast-search-bar-warning")
          .classList.remove("displayed");
      }); */
  }, []);

  // bring in history hook to redirect without refresh
  let history = useHistory();
  const submitHandler = e => {
    // don't refresh
    e.preventDefault();
    // gets the room ID
    let roomId = document.getElementById("cast-search-bar-input").value;
    // if you submit without a roomid, or if you submit with random icon, then make random room id
    if (roomId === "" || e.target.id === "cast-search-bar-random-icon") {
      roomId = (+new Date()).toString(36);
    }

    // if you are submitting from a start cast, set the initiator state to true for streaming
    if (type === "start") {
      actions.setInitiator();
      // if you are submitting from a join cast, set the initiator state to false for streaming
    } else if (type === "join") {
      actions.removeInitiator();
    }
    // set the roomid state for streaming
    actions.setRoomIdActions(roomId);
    //redirect the user
    history.push(`/join/${roomId}`);
  };

  // simple little switch for joining vs starting a cast
  let title, placeholder;
  if (type === "join") {
    title = "Join a room";
    placeholder = "Enter in your desired room ID to join that room";
  } else if (type === "start") {
    title = "Create a room";
    placeholder = "Enter in your desired room ID to create that room";
  } else {
    title = "Something went wrong";
  }

  return (
    <SearchBar
      type={type}
      title={title}
      placeholder={placeholder}
      submitHandler={submitHandler}
    />
  );
};

SearchBarContainer.propTypes = {
  roomId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return { roomId: state.roomId, type: ownProps.type };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { ...setRoomIdActions, ...initiatorActions },
      dispatch
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
