/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";

const Blog: FC<any> = ({ id, title, description, img }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`col-md-6 col-lg-4 transition-all ease-linear duration-500`}
      data-aos-once={true}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="blog-entry">
        <img
          className="block-20 d-flex align-items-end object-cover w-full "
          src={img}
        />
        <div className="text bg-white p-4">
          <h3 className="heading">{title}</h3>
          <p>{expanded ? description : `${description.slice(0, 100)}...`}</p>
          <div className="d-flex align-items-center mt-4">
            <p className="mb-0">
              <button onClick={handleToggleExpand} className="btn btn-primary">
                {expanded ? "Read Less" : "Read More"}
                <span className="ion-ios-arrow-round-forward"></span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
