import React from "react";

const MyFooter = () => {
  return (
    <div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        Mirpur-1 , Dhaka , Bangladesh{" "}
                      </span>
                    </li>
                    <li>
                      <a>
                        <span className="icon icon-phone"></span>
                        <a href="tel:+880 1711 385722" className="text">
                          +880 1711 385722
                        </a>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon icon-envelope"></span>
                        <span className="text">
                          <span
                            className="__cf_email__"
                            data-cfemail="e1888f878ea1988e9493858e8c80888fcf828e8c"
                          >
                            support@bitsofts.io
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(./assets/images/image_1.jpg)`,
                    }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a>Even the all-powerful Pointing has no control about</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a>
                          <span className="icon-calendar"></span> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a>
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a>
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-5 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{
                      backgroundImage: `url(./assets/images/image_2.jpg)`,
                    }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <a>Even the all-powerful Pointing has no control about</a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a>
                          <span className="icon-calendar"></span> June 27, 2019
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span className="icon-person"></span> Admin
                        </a>
                      </div>
                      <div>
                        <a>
                          <span className="icon-chat"></span> 19
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/service">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/project">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <span className="ion-ios-arrow-round-forward mr-2"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2 text-center"
                      placeholder="Enter email address"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="form-control submit px-3"
                    />
                  </div>
                </form>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li
                    className=""
                    data-aos-once={true}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li
                    className=""
                    data-aos-once={true}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li
                    className=""
                    data-aos-once={true}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy; All rights reserved | Developed by{" "}
                <a
                  href="https://bitsofts.io/"
                  target="_blank"
                  style={{ color: "#1B9CE3" }}
                >
                  bitsofts.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyFooter;
