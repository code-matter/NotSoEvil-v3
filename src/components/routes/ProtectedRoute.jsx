import { Navigate } from "react-router-dom"
import { ls } from "utils/storage"

const ProtectedRoute = ({ children }) => {
    const user = ls.get("@user")

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute
