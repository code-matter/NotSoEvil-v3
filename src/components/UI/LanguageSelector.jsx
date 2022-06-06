import { USERS_KEYS } from "constants/keys"
import { UserContext } from "context/UserContext"
import moment from "moment"
import React from "react"
import { useContext } from "react"

const LanguageSelector = () => {
    const userContext = useContext(UserContext)

    return (
        <div className="language-select">
            <p
                className={moment.locale() === "fr" ? "active" : "inactive"}
                onClick={() => {
                    userContext.userDispatch({ type: USERS_KEYS.SET_LOCALE, payload: "fr-ca" })
                }}
            >
                FR
            </p>
            <p className="separator">|</p>
            <p
                className={moment.locale() === "en" ? "active" : "inactive"}
                onClick={() => {
                    userContext.userDispatch({ type: USERS_KEYS.SET_LOCALE, payload: "en-ca" })
                }}
            >
                EN
            </p>
        </div>
    )
}

export default LanguageSelector
