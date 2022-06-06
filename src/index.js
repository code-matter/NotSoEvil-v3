import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"

import moment from "moment"
import "moment/locale/fr"
import { BrowserRouter, HashRouter } from "react-router-dom"
import AppRouter from "router"
import { history } from "utils/history"
import "./i18n/i18n"

import "antd/dist/antd.min.css"
import "assets/scss/styles.scss"

moment.locale("fr")

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <HashRouter history={history}>
            <AppRouter />
        </HashRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
