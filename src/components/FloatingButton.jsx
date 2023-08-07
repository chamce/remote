import { useCallback, useState } from "react";

import { useEventListener } from "../hooks/useEventListener";

const FloatingButton = () => {
  const transition = "transform 0.15s ease-in-out";
  const [direction, setDirection] = useState("right");

  const handleShown = useCallback(() => setDirection("left"), []);
  const handleHidden = useCallback(() => setDirection("right"), []);

  useEventListener("shown.bs.offcanvas", handleShown);
  useEventListener("hidden.bs.offcanvas", handleHidden);

  return (
    <button
      className="btn btn-eastern py-2 d-flex align-items-center justify-content-center box-shadow-6 bg-gradient rounded-circle"
      data-bs-target="#offcanvasExample"
      style={{ height: 56, width: 56 }}
      aria-controls="offcanvasExample"
      data-bs-toggle="offcanvas"
      type="button"
    >
      <svg
        style={direction === "right" ? { transition } : { transform: "scaleX(-1)", transition }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
      </svg>
    </button>
  );
};

export default FloatingButton;
