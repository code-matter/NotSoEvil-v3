import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"

import moment from "moment"
import "moment/locale/fr"
import { HashRouter } from "react-router-dom"
import AppRouter from "router"
import { history } from "utils/history"
import "./i18n/i18n"

import "antd/dist/antd.min.css"
import "assets/scss/styles.scss"
import { Provider } from "react-redux"
import { store } from "app/store"

moment.locale("fr")
// ! at the end is saying to TS that I KNOW document.getElementById("root") is NOT NULL.
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    // <React.StrictMode>

    // NO history={history} ???
    <HashRouter >
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </HashRouter>
    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
