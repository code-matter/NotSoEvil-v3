import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/routes/ProtectedRoute"
import { history } from "./utils/history"
import { routes } from "./constants/routes"
import { ConfigProvider } from "antd"
import { useTranslation } from "react-i18next"
import enUS from "antd/lib/locale/en_US"
import frFR from "antd/lib/locale-provider/fr_FR"
import "moment/locale/fr"

const AppRouter = () => {
    const { i18n } = useTranslation()

    return (
        <ConfigProvider locale={i18n?.language?.includes("fr") ? frFR : enUS}>
            <div className="page-wrap">
                <div className="page-content">
                    <Routes history={history}>
                        {routes.map((r, idx) => {
                            const Component = r.component
                            return r.protected ? (
                                <Route
                                    key={idx}
                                    path={r.path}
                                    element={
                                        <ProtectedRoute>
                                            <Component />
                                        </ProtectedRoute>
                                    }
                                />
                            ) : (
                                <Route key={idx} path={r.path} element={<Component />} />
                            )
                        })}
                    </Routes>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default AppRouter
