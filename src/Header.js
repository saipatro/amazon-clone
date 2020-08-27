import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__menuIcon">
        <MenuIcon />
      </Link>
      <Link to="/">
        <div className="header__logo">
          <img
            className="header__image"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__item">
            <span className="header__optionLineOne">Hello Sign In</span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__item">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/prime" className="header__link">
          <div className="header__item">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__itemCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
