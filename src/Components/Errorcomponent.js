import React from "react";
import { ImSad } from "react-icons/im";
const Errorcomponent = () => {
  return (
    <div className="error-component">
      <h3>
        <span>
          <ImSad />
        </span>{" "}
        Oops! something Went wrong
      </h3>
    </div>
  );
};

export default Errorcomponent;
