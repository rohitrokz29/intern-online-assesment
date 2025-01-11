import React from "react";
import ReactDOM from "react-dom";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

import "./index.css";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
import App from "./App";

root.render(<App />);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
