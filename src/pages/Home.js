import { Button, DatePicker } from "antd"
import EvilLogo from "components/UI/EvilLogo"
import LanguageSelector from "components/UI/LanguageSelector"
import SmileySun from "components/UI/SmileySun"
import { BUTTON_COLORS } from "constants/colors"
import { USERS_KEYS } from "constants/keys"
import { UserContext } from "context/UserContext"
import i18next from "i18next"
import moment from "moment"
import React, { useState } from "react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Random } from "utils/random"

const Home = () => {
    const [rdvHover, setRdvHover] = useState(false)
    const [flashHover, setFlashHover] = useState(false)
    const [shopHover, setShopHover] = useState(false)
    const [moreHover, setMoreHover] = useState(false)
    const { t } = useTranslation()

    return (
        <div className="home">
            <LanguageSelector />
            <div className="home-logos">
                <EvilLogo />
                <SmileySun />
            </div>
            <div className="text">
                <h3>TATTOOS & PLENTY MORE</h3>

                <h2>
                    D'LA <span className="highlight teal">COULEUR</span> PI BEN
                    <br />
                    D'LA <span className="highlight mauve">BONNE HUMEUR</span>
                </h2>
            </div>
            <div className="btn-container">
                <Button
                    href="/#/booking"
                    type="link"
                    className={`${rdvHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setRdvHover(true)}
                    onMouseLeave={() => setRdvHover(false)}
                >
                    {t("general.rdv")}
                </Button>
                <Button
                    href="/#/flash"
                    type="link"
                    className={`${flashHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setFlashHover(true)}
                    onMouseLeave={() => setFlashHover(false)}
                >
                    FLASH
                </Button>
                <Button
                    href="/#/shop"
                    type="link"
                    className={`${shopHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setShopHover(true)}
                    onMouseLeave={() => setShopHover(false)}
                >
                    {t("general.shop")}
                </Button>
                <Button
                    href="/#/moremoremore"
                    type="link"
                    className={`${moreHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setMoreHover(true)}
                    onMouseLeave={() => setMoreHover(false)}
                >
                    {t("general.moremoremore")}
                </Button>
            </div>
        </div>
    )
}

export default Home
