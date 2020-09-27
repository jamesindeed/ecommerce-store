import React from "react";
import '../Style/Header.css';
import SearchIcon from "@material-ui/icons/Search";


function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        alt=""
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input type="text" className="header__searchIn" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <nav className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
