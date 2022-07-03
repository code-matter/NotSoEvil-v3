import moment from "moment"
import { useTranslation } from "react-i18next"
import { useMatch, useNavigate } from "react-router-dom"

const LanguageSelector = () => {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const isHome = useMatch("/")

    const changeLocale = target => {
        moment.locale(target)
        i18n.changeLanguage(target)
    }
    return (
        <div
            className="language-select"
            style={{ justifyContent: isHome ? "space-between" : "flex-end" }}
        >
            <>
                {isHome && (
                    <p className="login" onClick={() => navigate("/login")}>
                        Login
                    </p>
                )}
                <div className="languages">
                    <p
                        className={i18n.language?.includes("fr") ? "active" : "inactive"}
                        onClick={() => changeLocale("fr")}
                    >
                        FR
                    </p>
                    <p className="separator">|</p>
                    <p
                        className={i18n.language?.includes("en") ? "active" : "inactive"}
                        onClick={() => changeLocale("en")}
                    >
                        EN
                    </p>
                </div>
            </>
        </div>
    )
}

export default LanguageSelector
