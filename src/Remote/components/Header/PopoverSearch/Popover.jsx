import React, { useCallback, useState, useRef } from "react";

import { useClickOutside } from "./useClickOutside";

export const Popover = ({ children }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div style={{ position: "relative" }}>
      <div onClickCapture={() => toggle(true)} style={{ width: "fit-content" }}>
        {children[0]}
      </div>
      {isOpen && (
        <div style={{ position: "absolute", right: 0 }} ref={popover}>
          {children[1]}
        </div>
      )}
    </div>
  );
};
