import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/routes/ProtectedRoute"
import { history } from "./utils/history"
import { routes } from "./constants/routes"
import { ConfigProvider } from "antd"
import { useReducer } from "react"
import { userInitialstate, userReducer } from "reducers/UserReducer"
import { UserContext } from "context/UserContext"
import LanguageSelector from "components/UI/LanguageSelector"

const AppRouter = () => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialstate)

    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            <ConfigProvider locale={userState.locale}>
                <div className="page-wrap">
                    {/* <LanguageSelector /> */}
                    <div className="page-content">
                        <Routes history={history}>
                            {routes.map((r, idx) => {
                                return r.protected ? (
                                    <Route
                                        key={idx}
                                        path={r.path}
                                        element={<ProtectedRoute>{r.component}</ProtectedRoute>}
                                    />
                                ) : (
                                    <Route key={idx} path={r.path} element={r.component} />
                                )
                            })}
                        </Routes>
                    </div>
                </div>
            </ConfigProvider>
        </UserContext.Provider>
    )
}

export default AppRouter
