import { configureStore } from "@reduxjs/toolkit"
import { UserSlice } from "slices/user.slice"

const preloadedState = JSON.parse(localStorage.getItem("redux-state")!) || {}

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState,
})

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem("redux-state", JSON.stringify(state))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
