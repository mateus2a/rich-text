import React from "react";

import { buttons } from "../../data/buttons";

function Button() {
  return (
    <div className="text-editor-header">
      {buttons.map((e) => (
        <button type="button" key={e.dataElement} data-element={e.dataElement}>
          <i className={e.class} />
        </button>
      ))}
    </div>
  );
}

export default Button;
