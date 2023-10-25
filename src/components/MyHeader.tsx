import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const MyHeader = () => {
  const [pathname, setPathname] = useState("/");
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((location) => {
      setPathname(location?.pathname);
    });
    return () => {
      unlisten(); // Cleanup the listener when the component unmounts
    };
  }, [history]);
  return (
    <div>
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href="/">
                Consolution
              </a>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <span>
                      <a
                        href="support@bitsofts.io"
                        className="__cf_email__"
                        data-cfemail="334a5c4641565e525a5f73565e525a5f1d505c5e"
                      >
                        support@bitsofts.io
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <a href="tel:+880 1711 385722">Call Us: +880 1711 385722</a>
                  </div>
                </div>
                <div className="col-md topper d-flex align-items-center justify-content-end">
                  <button
                    onClick={() => history.push("/contact")}
                    className="btn py-2 px-3 btn-primary"
                  >
                    <span>Free Consulting</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <form action="#" className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control pl-3"
                placeholder="Search"
              />
              <button
                type="submit"
                placeholder=""
                className="form-control search"
              >
                <span className="ion-ios-search"></span>
              </button>
            </div>
          </form>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item `}>
                <Link
                  to="/"
                  className={`nav-link pl-0 `}
                  style={{
                    color: pathname === "/" ? "#279ce3" : "white",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link  "
                  style={{
                    color: pathname === "/about" ? "#279ce3" : "white",
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/project"
                  className="nav-link"
                  style={{
                    color: pathname === "/project" ? "#279ce3" : "white",
                  }}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/service"
                  className="nav-link"
                  style={{
                    color: pathname === "/service" ? "#279ce3" : "white",
                  }}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-link"
                  style={{
                    color: pathname === "/blog" ? "#279ce3" : "white",
                  }}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link"
                  style={{
                    color: pathname === "/contact" ? "#279ce3" : "white",
                  }}
                >
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  Career
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyHeader;
