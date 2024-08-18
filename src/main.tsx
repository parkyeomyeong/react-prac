import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import P1props from "./practice/P1props";
import P2State from "./practice/P2State";
import P3event from "./practice/P3event";
import P4Iterate from "./practice/P4Iterate";
import P5hooks from "./practice/P5hooks";
import P5hooks2 from "./practice/P5hooks2";
import P6reducer from "./practice/P6reducer";
import P7memo from "./practice/P7memo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <p1_props title={'아 이름'}/> */}
    <P7memo />
  </StrictMode>
);
