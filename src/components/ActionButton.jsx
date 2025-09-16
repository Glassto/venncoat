import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const ActionButton = () => {
  return (
    <button className="action-button group">
      <p>Solicită Ofertă</p>
      <ArrowLongRightIcon className="mx-2 mr-3 size-6" />
    </button>
  );
};

export default ActionButton;
