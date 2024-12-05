import ReactDOM from "react-dom/client";
import React from "react";

import Wrapper from "./components/Wrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
      <div className="display-6">Main content goes here</div>
    </Wrapper>
  </React.StrictMode>,
);
