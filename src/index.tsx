import ReactDOM from 'react-dom';
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"
import { store } from "./redux/store"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components"

const theme = {
  low: "gray",
  normal: "orange",
  high: "tomato",
}

// @ts-ignore
const root: any = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
