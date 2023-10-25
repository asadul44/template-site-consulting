import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import Aos from "aos";
import OurService from "./OurService";
import OurProject from "./OurProject";
import OurBlog from "./OurBlog";
import ClientComment from "./ClientComment";
import OurFeatures from "./OurFeatures";
import StatisticsData from "./StatisticsData";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const gotoService = () => {
    const scrollSection = document.getElementById("service");
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <div
          className="slider-item"
          style={{
            width: "100%",
            height: "700px",
            backgroundImage: `url(./assets/images/bg_1.jpg)`,
          }}
        >
          <div className=" w-full bg-gray-700 h-full bg-opacity-30">
            <div className="absolute mt-10 ml-6 md:mt-56 md:ml-80">
              <span className="text-2xl text-white font-bold font-sans tracking-widest">
                Welcome to Consolve
              </span>
              <h1 className="text-7xl text-white font-black font-sans">
                We Are The Best
                <br /> Consulting Agency
              </h1>
              <p
                onClick={gotoService}
                className="btn btn-primary px-4 py-3 mt-3"
              >
                Our Services
              </p>
            </div>
          </div>
        </div>

        <div
          className="slider-item"
          style={{
            width: "100%",
            height: "700px",
            backgroundImage: `url(./assets/images/bg_2.jpg)`,
          }}
        >
          <div className=" w-full bg-gray-700 h-full bg-opacity-30">
            <div className="absolute mt-10 ml-6 md:mt-56 md:ml-80">
              <span className="text-2xl text-white font-bold font-sans tracking-widest">
                Todays Talent, Tommorow Success
              </span>
              <h1 className="text-7xl text-white font-black font-sans">
                We Help to Grow <br /> Your Business
              </h1>
              <p
                onClick={gotoService}
                className="btn btn-primary px-4 py-3 mt-3"
              >
                Our Services
              </p>
            </div>
          </div>
        </div>
      </Carousel>

      <OurFeatures />

      <StatisticsData />

      <OurService />

      {/* your get best guidness -2 */}

      <section
        className="ftco-intro ftco-no-pb img"
        style={{ backgroundImage: `url(./assets/images/bg_2.jpg)` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-9 col-md-8 d-flex align-items-center heading-section heading-section-white"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="mb-3 mb-md-0">You Always Get the Best Guidance</h2>
            </div>
            <div
              className="col-lg-3 col-md-4"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <button className="btn btn-white py-3 px-4">Request Quote</button>
            </div>
          </div>
        </div>
      </section>

      <OurProject />

      <OurBlog />

      <ClientComment />
    </div>
  );
};

export default Home;
