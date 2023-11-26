import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

import { Provider } from "react-redux"
import store from "./Redux/store"
import { AuthProvider } from "./context/authContext"

import "react-toastify/dist/ReactToastify.css"
import "./style/styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
