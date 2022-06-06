import { USERS_KEYS } from "constants/keys"
import { LANGUAGES } from "constants/languages"
import i18next from "i18next"
import moment from "moment"

export const userInitialstate = {
    locale: LANGUAGES["fr-ca"],
}

export const userReducer = (state, action) => {
    switch (action.type) {
        case USERS_KEYS.SET_LOCALE:
            // action.payload should be a key from constants/languages
            moment.locale(action.payload)
            console.log("action.payload.slice(0, 2)", action.payload.slice(0, 2))
            i18next.changeLanguage(action.payload.slice(0, 2))
            return { ...state, locale: LANGUAGES[action.payload] }
        default:
            return state
    }
}
