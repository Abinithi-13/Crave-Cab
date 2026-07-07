import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./Search";
import "../../App.css";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <nav className="navbar row sticky-top">
        {/* logo */}
        <div className="col-12 col-md-3">
          <Link to="/">
            <img src="/images/logo.webp" alt="logo" className="logo" />
          </Link>
        </div>

        {/* search bar */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/eats/stores/search/:keyword" element={<Search />} />
          </Routes>
        </div>

        {/* Cart + Profile */}
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span className="ml-3" id="cart">Cart</span>
            <span className="ml-1" id="cart_count">{cartItems?.length || 0}</span>
          </Link>

          {isAuthenticated ? (
            <Link to="/users/me" className="profile-link">
              <img
                src={user?.avatar?.url}
                alt={user?.name}
                className="profile-avatar"
              />
            </Link>
          ) : (
            <Link to="/users/login" className="material-symbols-outlined web_logo">
              account_circle
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
