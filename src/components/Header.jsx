import { NavLink } from "react-router-dom"
import { Navbar } from "react-bootstrap"

export const Header = () => {
  function closeSpMenu() {
    const ele1 = document.querySelector(".navbar-toggler")
    if (ele1.classList.contains("collapsed")) {
      ele1.classList.remove("collapsed")
    }
    const ele2 = document.querySelector(".navbar-collapse")
    if (ele2.classList.contains("show")) {
      ele2.classList.remove("show")
    }
  }

  return (
    <div className="row" id="header">
      <Navbar expand="lg" className={"py-2 navbar-dark bg-dark"}>
        <div className={"container-fluid align-items-baseline"}>
          <NavLink className="text-decoration-none" to="/">
            <Navbar.Brand className={"navbar-brand fs-1 pb-2 me-4"}>
              Horse Prediction
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className={"collapse navbar-collapse fs-5"}
            id="navbarSupportedContent"
          >
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
              <li className="nav-item">
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
              </li>
              {/* <li className="nav-item">
                <NavLink
                  style={navlinkStyle}
                  className={"nav-link"}
                  to="/about"
                  onClick={closeSpMenu}
                >
                  About
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  style={navlinkStyle}
                  to="/product/predict-app"
                  className={"nav-link"}
                  onClick={closeSpMenu}
                >
                  Prediction
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={navlinkStyle}
                  to="/product/odds-app"
                  className={"nav-link"}
                  onClick={closeSpMenu}
                >
                  Odds
                </NavLink>
              </li>
              <li className="nav-item ">
                <a
                  style={navlinkStyle}
                  className={"nav-link"}
                  href="/index.html"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 me-1"
                    style={{ width: "20px", paddingBottom: "5px" }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Portfolio
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <style jsx="true">{`
        .nav-item {
          padding-left: 0.6rem;
          pdding-right: 0.6rem;
        }

        a.nav-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }
        a.nav-link::after {
          position: absolute;
          bottom: 5px;
          left: 0;
          content: "";
          width: 100%;
          height: 1px;
          background: #fff;
          transform: scale(0, 1);
          transform-origin: left top;
          transition: transform 0.3s;
        }
        a.nav-link:hover::after {
          transform: scale(1, 1);
        }

        a.nav-link.active::after {
          transform: scale(1, 1);
        }
      `}</style>
    </div>
  )
}

const navlinkStyle = {
  transition: "all 0.5s",
}
