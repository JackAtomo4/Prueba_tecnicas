import React from "react";
import "../css/pageSelector.css";
class PageSelector extends React.Component {
  render() {
    const { searchTerm, page, totalPage } = this.props;
    return (
      <footer className="pagesSelector">
        <div>
          {page > 1 && <button onClick={() => searchTerm(page - 1)}>-</button>}
          <p>
            {page}-{totalPage}
          </p>
          {page <= totalPage && (
            <button onClick={() => searchTerm(page + 1)}>+</button>
          )}
        </div>
      </footer>
    );
  }
}
export default PageSelector;
