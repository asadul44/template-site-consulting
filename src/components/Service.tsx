import React from 'react';
import OurFeatures from './Layout/OurFeatures';
import OurService from './Layout/OurService';

const Service = () => {
    return (
        <div>

            <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(./assets/images/bg_1.jpg)` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9   text-center" data-aos-once={true} data-aos="fade-up" data-aos-duration="1000">
                            <h1 className="mb-2 bread text-5xl">Services</h1>
                            <p className="breadcrumbs"><span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Services <i className="ion-ios-arrow-forward"></i></span></p>
                        </div>
                    </div>
                </div>
            </section>

            <OurFeatures />


            <OurService />



        </div>
    );
};

export default Service;