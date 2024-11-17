import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { App } from "./components";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <ToastContainer
        theme="light"
        style={{ zIndex: 99999 }}
        autoClose={2000}
      />
    </BrowserRouter>
  </>
);
