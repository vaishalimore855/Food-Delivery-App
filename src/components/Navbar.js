import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../components/ContextReducer.js";
import Modal from "../Modal";
import Cart from "../pages/Cart";

export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  const [hovered, setHovered] = useState(null);
  localStorage.setItem("temp", "first");
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();

  // Styles for hover effect
  const linkStyle = {
    fontWeight: "normal",
    transition: "all 0.3s ease",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    ...linkStyle,
    color: "darkgreen",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark position-fixed shadow-lg p-3 mb-5 bg-body rounded"
        style={{
          boxShadow: "0px 10px 20px black",
          filter: "blur(20)",
          position: "fixed",
          zIndex: "10",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-1 text-success fst-italic"
            to="/"
            style={{ fontWeight: "bold", textShadow: "2px 2px 4px #000000" }}
          >
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 mx-3 text-success active"
                  aria-current="page"
                  to="/"
                  style={hovered === "home" ? linkHoverStyle : linkStyle}
                  onMouseEnter={() => setHovered("home")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 mx-3 active text-success"
                    aria-current="page"
                    to="/myOrder"
                    style={hovered === "orders" ? linkHoverStyle : linkStyle}
                    onMouseEnter={() => setHovered("orders")}
                    onMouseLeave={() => setHovered(null)}
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1 fs-5"
                  to="/login"
                  style={hovered === "login" ? linkHoverStyle : linkStyle}
                  onMouseEnter={() => setHovered("login")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1 fs-5"
                  to="/signup"
                  style={hovered === "signup" ? linkHoverStyle : linkStyle}
                  onMouseEnter={() => setHovered("signup")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Signup
                </Link>
              </form>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2 fs-5"
                  onClick={loadCart}
                  style={hovered === "cart" ? linkHoverStyle : linkStyle}
                  onMouseEnter={() => setHovered("cart")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Badge
                    color="secondary"
                    badgeContent={items.length}
                    className="fs-5"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}

                <button
                  onClick={handleLogout}
                  className="btn bg-white text-success fs-5"
                  style={hovered === "logout" ? linkHoverStyle : linkStyle}
                  onMouseEnter={() => setHovered("logout")}
                  onMouseLeave={() => setHovered(null)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
