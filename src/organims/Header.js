import React from "react";
import icon from "../resources/search.png";
import "../css/header.css";
class Header extends React.Component {
  render() {
    const { term, changeTerm, searchTerm, loading } = this.props;
    return (
      <header>
        <h1>Photo Finder</h1>
        <p>
          Welcome to Photo Finder try to type any word and we find a amazing
          photos
        </p>
        <input
          type="text"
          id="searchTerm"
          value={term}
          onChange={changeTerm}
          placeholder="Ex: Dance Monkey"
        />
        <button
          id="submitButton"
          onClick={() => searchTerm()}
          disabled={loading}
        >
          <img id="submitIcon" src={icon} />
        </button>
      </header>
    );
  }
}
export default Header;
