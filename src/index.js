// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store"; // 스토어 생성 파일 경로
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Redux 스토어로 애플리케이션을 감싸줍니다 */}
    <App />
  </Provider>,
  document.getElementById("root")
);
