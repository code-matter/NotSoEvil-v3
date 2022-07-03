import Booking from "pages/Booking"
import Home from "pages/Home"
import Login from "pages/Login"

export const routes = [
    {
        title: "Home",
        component: Home,
        path: "/",
        protected: false,
    },
    {
        title: "Home",
        component: Booking,
        path: "/booking",
        protected: false,
    },
    {
        title: "Login",
        component: Login,
        path: "/login",
        protected: false,
    },
    {
        title: "Erreur 404",
        component: () => <h2>ERROR!!!!!!</h2>,
        path: "*",
        protected: false,
    },
]

export const getTitle = path => {
    return routes.find(route => route.path === path).title
}
