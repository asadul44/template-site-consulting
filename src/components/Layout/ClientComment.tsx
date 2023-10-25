import React from "react";
import Carousel from "react-multi-carousel";
import { feedbackData } from "../../utils/data";
import ClientCard from "./ClientCard";

const ClientComment = () => {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  return (
    <div>
      <section className="ftco-section testimony-section">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center heading-section ">
            <h2 className="mb-4">Our Clients Says</h2>
            <p>
              Hear what our clients have to say about our services, expertise,
              and the impact we've made on their businesses.
            </p>
          </div>
        </div>

        <Carousel
          responsive={responsive2}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          className="mb-12 mx-4 sm:mx-12 lg:mx-48"
        >
          {feedbackData?.map((item, index) => {
            return <ClientCard key={item.id} {...item} />;
          })}

          {/* <div className=" mx-6">
            <div className="testimony-wrap d-flex">
              <div
                className="user-img"
                style={{ backgroundImage: `url(./assets/images/person_2.jpg)` }}
              ></div>
              <div className="text pl-4">
                <span className="quote d-flex align-items-center justify-content-center"></span>
                <p>
                  We partnered with XYZ Company for their consulting services,
                  and it was a transformative experience. Their expertise and
                  insights have helped us streamline our operations and drive
                  significant cost savings.
                </p>
                <p className="name">Henry Dee</p>
                <span className="position">Businesswoman</span>
              </div>
            </div>
          </div> */}

          {/* <div className="item mx-6">
            <div className="testimony-wrap d-flex">
              <div
                className="user-img"
                style={{ backgroundImage: `url(./assets/images/person_3.jpg)` }}
              ></div>
              <div className="text pl-4">
                <span className="quote d-flex align-items-center justify-content-center"></span>
                <p>
                  The team at XYZ Company truly understands our industry and has
                  consistently delivered exceptional results. Their attention to
                  detail and commitment to client satisfaction is unmatched
                </p>
                <p className="name">Mark Huff</p>
                <span className="position">Businesswoman</span>
              </div>
            </div>
          </div> */}

          {/* <div className="item mx-6">
            <div className="testimony-wrap d-flex">
              <div
                className="user-img"
                style={{ backgroundImage: `url(./assets/images/person_4.jpg)` }}
              ></div>
              <div className="text pl-4">
                <span className="quote d-flex align-items-center justify-content-center"></span>
                <p>
                  The business analysis conducted by [Company Name] was
                  incredibly insightful. Their recommendations have paved the
                  way for strategic decision-making and improved our overall
                  performance.
                </p>
                <p className="name">Ken Bosh</p>
                <span className="position">Businesswoman</span>
              </div>
            </div>
          </div> */}
        </Carousel>
      </section>
    </div>
  );
};

export default ClientComment;
