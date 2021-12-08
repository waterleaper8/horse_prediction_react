import { NavLink } from "react-router-dom";
import { NavItem, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  function closeSpMenu() {
    const ele1 = document.querySelector(".navbar-toggler");
    if (ele1.classList.contains("collapsed")) {
      ele1.classList.remove("collapsed");
    }
    const ele2 = document.querySelector(".navbar-collapse");
    if (ele2.classList.contains("show")) {
      ele2.classList.remove("show");
    }
  }

  return (
    <div className="row" id="header">
      <Navbar expand="lg" className={"py-3 navbar-dark bg-dark"}>
        <div className={"container-fluid align-items-baseline"}>
          <NavLink className="text-decoration-none" to="/">
            <Navbar.Brand className={"navbar-brand fs-2 pb-2"}>
              Horse Prediction
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className={"collapse navbar-collapse fs-5"}
            id="navbarSupportedContent"
          >
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <NavItem className={"nav-item"}>
                <NavLink
                  exact
                  style={navlinkStyle}
                  className={"nav-link"}
                  aria-current="page"
                  to="/"
                  onClick={closeSpMenu}
                >
                  Home
                </NavLink>
              </NavItem>
              {/* <li className={"nav-item"}>
                <NavLink
                  style={navlinkStyle}
                  className={"nav-link"}
                  to="/about"
                  onClick={closeSpMenu}
                >
                  About
                </NavLink>
              </li> */}
              <li className={"nav-item"}>
                <NavLink
                  style={navlinkStyle}
                  to="/product/predict-app"
                  className={"nav-link"}
                  onClick={closeSpMenu}
                >
                  Prediction
                </NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink
                  style={navlinkStyle}
                  to="/product/odds-app"
                  className={"nav-link"}
                  onClick={closeSpMenu}
                >
                  Odds
                </NavLink>
              </li>
              <li className={"nav-item"}>
                <a
                  style={navlinkStyle}
                  className={"nav-link"}
                  href="/index.html"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <FontAwesomeIcon icon={faAngleDoubleUp} className="me-2" />
                  Portfolio
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

const navlinkStyle = {
  transition: "all 0.5s",
};
