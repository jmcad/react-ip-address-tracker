import React from "react";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <section>
      <div className="header-bg"></div>
      <div className="search-container">
        <h1 className="pd-bottom text-white" style={{ fontWeight: 500 }}>
          IP Address Tracker
        </h1>

        <SearchBar />
      </div>
    </section>
  );
};

export default Header;
