import React from 'react';

const StatisticsData = () => {
    return (
        <div>
            <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: `url(./assets/images/bg_3.jpg)` }}>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 text-center heading-section heading-section-white " data-aos-once={true} data-aos="fade-up" data-aos-duration="1000">
                            <h2 className="mb-0">You Always Get the Best Guidance</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-counter" id="section-counter">
                <div className="container">
                    <div className="row d-md-flex align-items-center justify-content-center">
                        <div className="wrapper">
                            <div className="row d-md-flex align-items-center">
                                <div className="col-md d-flex justify-content-center counter-wrap " data-aos-once={true} data-aos="fade-up" data-aos-duration="1000">
                                    <div className="block-18">
                                        <div className="icon"><span className="flaticon-doctor"></span></div>
                                        <div className="text">
                                            <strong className="number" data-number="705">705</strong>
                                            <span>Projects Completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-center counter-wrap " data-aos-once={true} data-aos="fade-up" data-aos-duration="1000">
                                    <div className="block-18">
                                        <div className="icon"><span className="flaticon-doctor"></span></div>
                                        <div className="text">
                                            <strong className="number" data-number="809">809</strong>
                                            <span>Satisfied Customer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-center counter-wrap " data-aos-once={true} data-aos="fade-up" data-aos-duration="1000">
                                    <div className="block-18">
                                        <div className="icon"><span className="flaticon-doctor"></span></div>
                                        <div className="text">
                                            <strong className="number" data-number="335">335</strong>
                                            <span>Awwards Received</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-center counter-wrap " data-aos-once={true} data-aos="fade-up" data-aos-duration="1000">
                                    <div className="block-18">
                                        <div className="icon"><span className="flaticon-doctor"></span></div>
                                        <div className="text">
                                            <strong className="number" data-number="35">35</strong>
                                            <span>Years of Experienced</span>
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

export default StatisticsData;