import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUserState {
    infos: any
    logged: boolean
}

const INIT_STATE: IUserState = {
    infos: {},
    logged: false,
}

export const UserSlice = createSlice({
    name: "user",
    initialState: INIT_STATE,
    reducers: {
        login: (state: IUserState, action: any) => {
            state.logged = true
            state.infos = action.payload
        },
        logout: (state: IUserState) => {
            state.logged = false
            state.infos = {}
        },
        update: (state: IUserState, action: any) => {
            state.infos = action.payload
        },
    },
})

export const { login, logout, update } = UserSlice.actions

export default UserSlice.reducer
