import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "./../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "#ff6347" }}>
        <strong style={{ fontSize: "1.5rem" }}>TasteQuest</strong>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active-menu-item" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active-menu-item" : ""}
        >
          Menu
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" className="search-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" className="cart-icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="cart-badge" />}
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="sign-in-btn">
            Sign In
          </button>
        ) : (
          <div
            className="navbar-profile"
            onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown on click
          >
            <img
              src={assets.profile_icon}
              alt="profile"
              className="profile-icon"
            />
            {dropdownOpen && ( // Conditionally render dropdown
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="orders" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="logout" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
