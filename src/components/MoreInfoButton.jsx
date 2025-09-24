import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const MoreInfoButton = () => {
  return (
    <button className="more-info-button group">
      <p>Află mai multe</p>
      <ArrowLongRightIcon className="mx-2 mr-3 size-6" />
    </button>
  );
};

export default MoreInfoButton;
