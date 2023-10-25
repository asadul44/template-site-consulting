import React from "react";
import { useHistory } from "react-router-dom";

const OurFeatures = () => {
  const history = useHistory();
  return (
    <div>
      <section className="ftco-section">
        <div className="mx-4 md:mx-12 lg:mx-48">
          <div className="row d-flex">
            <div
              className="col-md-5 order-md-last wrap-about align-items-stretch"
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="wrap-about-border ">
                <div
                  className="img"
                  style={{ backgroundImage: `url(./assets/images/about.jpg)` }}
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
                  <button
                    onClick={() => history.push("/contact")}
                    className="btn btn-primary py-3 px-4"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-7 wrap-about pr-md-4 "
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="mb-4">Our Main Features</h3>
              <p>
                XYZ consulting services encompassing technology integration,
                change management, talent acquisition, risk assessment,
                marketing strategy, and operational efficiency for sustainable
                success.
              </p>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services active text-center">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-collaboration"></span>
                    </div>
                    <div className="text media-body">
                      <h3>Organization</h3>
                      <p>
                        Develop comprehensive plans and actionable strategies to
                        achieve your organizational objectives.
                      </p>
                    </div>
                  </div>
                  <div className="services text-center">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-analysis"></span>
                    </div>
                    <div className="text media-body">
                      <h3>Risk Analysis</h3>
                      <p>
                        Identify potential risks and uncertainties that could
                        impact your organization's objectives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services text-center">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-search-engine"></span>
                    </div>
                    <div className="text media-body">
                      <h3>Marketing Strategy</h3>
                      <p>
                        Develop a targeted marketing strategy to effectively
                        position your brand in the competitive marketplace.
                      </p>
                    </div>
                  </div>
                  <div className="services text-center">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center">
                      <span className="flaticon-handshake"></span>
                    </div>
                    <div className="text media-body">
                      <h3>Capital Market</h3>
                      <p>
                        Financial instruments derived from underlying assets,
                        such as options and futures contracts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeatures;
