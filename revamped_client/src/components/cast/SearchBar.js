import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ type, title, placeholder, submitHandler }) => (
  <>
    <main className="main-cast-container">
      <h1>{title}</h1>
      <div className="cast-search-bar">
        <img
          src="/add.svg"
          className="cast-search-bar-icon"
          id="cast-search-bar-icon"
          alt="Join or Create a room"
        />
        <form className="cast-search-bar-input-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder={placeholder}
            className="cast-search-bar-input"
            id="cast-search-bar-input"
            autoComplete="off"
          />
        </form>
        {type === "start" ? (
          <img
            src="/random.svg"
            className="cast-search-bar-random-icon"
            id="cast-search-bar-random-icon"
            alt="Randomizer Room Selection"
            onClick={submitHandler}
          />
        ) : null}
      </div>
      <p className="cast-search-bar-warning" id="cast-search-bar-warning">
        <strong>Note:</strong> Conifer Broadcasting relies on experimental
        browser features to facilitate broadcasts. Because of this, not all
        browsers are supported. Currently supported browsers for casting are:
        Chrome for Desktop and Firefox for Desktop. Currently supported browsers
        for joining a cast are: Chrome for Desktop, Chrome for Android, Firefox
        for Desktop, and Firefox for Android.
      </p>
    </main>
  </>
);

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  submitHandler: PropTypes.func.isRequired
};

export default SearchBar;
