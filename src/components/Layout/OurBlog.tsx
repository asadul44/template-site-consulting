/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { blogData } from "../../utils/data";

import Blog from "./Blog";

const OurBlog = () => {
  return (
    <div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div
              className="col-md-8 text-center heading-section "
              data-aos-once={true}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="mb-4">
                <span>Recent</span> Blog
              </h2>
              <p>
                Explore our latest blog posts featuring valuable insights,
                industry trends, and expert advice for your business success.
              </p>
            </div>
          </div>
          <div className="row ">
            {blogData?.map((item) => {
              return <Blog key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBlog;
