import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { buttons } from "../../data/buttons";

function Button() {
  return (
    <div className="text-editor-header">
      {buttons.map((e) => (
        <button type="button" key={e.dataElement} data-element={e.dataElement}>
          <FontAwesomeIcon icon={e.icon} />
        </button>
      ))}
    </div>
  );
}

export default Button;
