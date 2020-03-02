import React, { useEffect } from "react";
import * as activeTabActions from "../../redux/actions/activeTabActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import NavBar from "./NavBar";

const NavBarContainer = ({ activeTab, location, actions }) => {
  // handle clicking on a link to change the active tab
  const clickHandler = t => {
    actions.changeActiveTab(t);
  };

  // on mouse over, add the temp-hidden class to all nav links
  const hoverInHandler = e => {
    e.preventDefault();
    const links = document.getElementsByClassName("nav-bar-link");
    for (var i = 0; i < links.length; i++) {
      const link = links[i];
      link.classList.add("temp-hidden");
    }
  };

  // on mouse out, remove the temp-hidden class from all nav links
  const hoverOutHandler = e => {
    e.preventDefault();
    const links = document.getElementsByClassName("nav-bar-link");
    for (var i = 0; i < links.length; i++) {
      const link = links[i];
      link.classList.remove("temp-hidden");
    }
  };

  // on initial render, set the active tab by the location prop
  useEffect(() => {
    const currentTab =
      location.split("/")[1] === "" ? "home" : location.split("/")[1];
    actions.changeActiveTab(currentTab);
  }, []);

  return (
    <NavBar
      handler={clickHandler}
      active={activeTab}
      hoverIn={hoverInHandler}
      hoverOut={hoverOutHandler}
    />
  );
};

NavBarContainer.propTypes = {
  activeTab: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return { activeTab: state.activeTab, location: ownProps.location.pathname };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(activeTabActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
