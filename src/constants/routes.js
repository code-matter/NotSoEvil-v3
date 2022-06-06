import Home from "pages/Home"

export const routes = [
    {
        title: "Home",
        component: <Home />,
        path: "/",
        protected: false,
    },
    {
        title: "Erreur 404",
        component: <p>ERROR</p>,
        path: "*",
        protected: false,
    },
]

export const getTitle = path => {
    return routes.find(route => route.path === path).title
}
