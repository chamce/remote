import ReactDOM from "react-dom/client";
import React from "react";

import { Example } from "./components/Example";
import Wrapper from "./Wrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
      <div className="border border-dark h-100"></div>
    </Wrapper>
  </React.StrictMode>,
);
