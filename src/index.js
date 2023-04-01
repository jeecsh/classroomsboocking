import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export { default as ReactFromModule } from "react";

// import React from "react";
// import { ReactFromModule } from "mymodule";
// console.log(React === ReactFromModule);
