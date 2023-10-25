import React, { useState, useCallback } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude: 23.8103,
    longitude: 90.4125,
    zoom: 8,
    width: " 100%",
    height: "320px",
    pitch: 50,
  });
  const [marker, setMarker] = useState({
    latitude: 23.748,
    longitude: 90.4122,
  });
  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url(./assets/images/bg_1.jpg` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div
              className="col-md-9  text-center"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="mb-2 bread text-5xl">Contact Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  Contact <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
              <div className="row mb-5">
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-map-o"></span>
                  </div>
                  <p>
                    <span>Address:</span> Mirpur-1 , Dhaka , Bangladesh
                  </p>
                </div>
                <div className="col-md-4 text-center border-height py-4">
                  <div className="icon">
                    <span className="icon-mobile-phone"></span>
                  </div>
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel:+880 1711 385722">+ 880 1711 385722</a>
                  </p>
                </div>
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-envelope-o"></span>
                  </div>
                  <p>
                    <span>Email:</span>{" "}
                    <a href="support@bitsofts.io">
                      <span
                        className="__cf_email__"
                        data-cfemail="0c65626a634c7563797e7f657869226f6361"
                      >
                        support@bitsofts.io
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
              <h2 className="text-center">
                If you got any questions <br />
                please do not hesitate to send us a message
              </h2>
              <form action="#" className="bg-light p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <ReactMapGL
        {...viewport}
        height="800px"
        mapStyle="mapbox://styles/mdsaddamhossain/cktpkaw9j0l5f17ogmohpjmbu"
        onViewportChange={(viewport: any) => setViewport(viewport)}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibWRzYWRkYW1ob3NzYWluIiwiYSI6ImNrdHBkOGZyOTBsamkydXBtZGZvemdsaGkifQ.1xe6elvzqbfDw1H2fsBx_w"
        }
      >
        <Marker
          latitude={23.748}
          longitude={90.4122}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <img
            src="https://icon-library.com/images/location-icon-transparent-background/location-icon-transparent-background-7.jpg"
            width="50px"
            height="80px"
          />
        </Marker>
      </ReactMapGL> */}
    </div>
  );
};

export default Contact;
