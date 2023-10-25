import React from "react";
import ClientComment from "./Layout/ClientComment";
import StatisticsData from "./Layout/StatisticsData";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: `url(./assets/images/bg_1.jpg)` }}
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
              <h1 className="mb-2 bread text-5xl">About Us</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  About us <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="mx-4 md:mx-12 lg:mx-72">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about align-items-stretch">
              <div className="wrap-about-border">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(./assets/images/xabout.jpg.pagespeed.ic.PeDpqPRcZK.jpg)`,
                    border: "2pxft",
                  }}
                ></div>
                <div className="text">
                  <h3>Read Our Success Story for Inspiration</h3>
                  <p>
                    At our company, we've achieved remarkable success stories
                    that showcase our dedication, innovation, and transformative
                    solutions. From startups on the verge of closure to
                    established companies seeking growth, our expertise has made
                    a significant impact. Read our success stories and be
                    inspired to unlock your own potential. Together, let's
                    create your extraordinary success story.
                  </p>
                  <p>
                    <button
                      onClick={() => history.push("/contact")}
                      className="btn btn-primary py-3 px-4 text-white"
                    >
                      Contact us
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-7 wrap-about pr-md-4 "
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="mb-4 text-3xl">Welcome to Consolution</h3>
              <p>
                Welcome to Consolution Agency! We specialize in strategic
                consulting and innovative solutions for transformative business
                growth. Our experienced team is dedicated to understanding your
                unique needs and delivering customized services that exceed
                expectations. From strategic planning to digital transformation,
                we have the expertise to guide you. With a collaborative
                approach and deep industry knowledge, we help unlock
                opportunities and drive tangible results. Whether you're a
                startup or an established enterprise, we're here to empower your
                business and propel you ahead of the competition. Discover the
                power of partnership with Consolution Agency and embark on a
                transformative journey towards greater success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-counter">
        <div className="mx-4 md:mx-12 lg:mx-72">
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div className="col-md-6 align-items-stretch d-flex">
              <div
                className="img img-video d-flex align-items-center"
                style={{
                  backgroundImage: `url(./assets/images/xabout.jpg.pagespeed.ic.PeDpqPRcZK.jpg)`,
                }}
              >
                <div className="video justify-content-center">
                  <a
                    href="https://vimeo.com/45830194"
                    className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                  >
                    <span className="ion-ios-play"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 heading-section pl-lg-5 pt-md-0 pt-5"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="mb-4">We Are the Best Consulting Agency</h2>
              <p>
                As the best consulting agency, we pride ourselves on delivering
                unparalleled expertise, innovative solutions, and exceptional
                service to our clients. With our proven track record and deep
                industry knowledge, we are the trusted partner for businesses
                seeking transformative growth. Our dedicated team of experts is
                committed to understanding your unique needs and providing
                tailored solutions that drive measurable results. Experience the
                difference of working with the best consulting agency and unlock
                the full potential of your business. Partner with us and embark
                on a journey of success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatisticsData />
      <ClientComment />
    </div>
  );
};

export default About;
