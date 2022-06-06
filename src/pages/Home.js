import { Button } from "antd"
import EvilLogo from "components/UI/EvilLogo"
import { BUTTON_COLORS } from "constants/colors"
import i18next from "i18next"
import React, { useState } from "react"
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
            <EvilLogo />
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
                    className={`${rdvHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setRdvHover(true)}
                    onMouseLeave={() => setRdvHover(false)}
                >
                    {t("general.rdv")}
                </Button>
                <Button
                    className={`${flashHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setFlashHover(true)}
                    onMouseLeave={() => setFlashHover(false)}
                >
                    FLASH
                </Button>
                <Button
                    className={`${shopHover ? Random.List(BUTTON_COLORS).color : ""}`}
                    onMouseEnter={() => setShopHover(true)}
                    onMouseLeave={() => setShopHover(false)}
                >
                    {t("general.shop")}
                </Button>
                <Button
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
