import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/routes/ProtectedRoute"
import { history } from "./utils/history"
import { routes } from "./constants/routes"

const AppRouter = () => {
    return (
        <div className="page-wrap">
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
    )
}

export default AppRouter
