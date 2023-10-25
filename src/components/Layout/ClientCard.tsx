/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react";

type Props = {
  id: number;
  name: string;
  description: string;
  img: string;
  position: string;
};

const ClientCard: FC<Props> = ({ id, name, description, img, position }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mx-2 mb-12 ">
      <div key={id} className="border p-4 rounded-md">
        <img className="h-12 w-12 rounded-full" src={img} alt="error" />
        <div className="text  ">
          <span className=""></span>
          <p className="mt-2">
            {expanded ? description : `${description.slice(0, 90)}...`}
          </p>
          <button onClick={handleToggleExpand} className="focus:outline-none">
            {expanded ? "Less" : "More"}
          </button>

          <p className="name text-lg font-semibold mt-2 ">{name}</p>
          <span className="position">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
