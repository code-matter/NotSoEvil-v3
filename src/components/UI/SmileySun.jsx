import React from "react"
import { ReactComponent as SUN } from "assets/img/Sun.svg"
import { ReactComponent as SMILEY } from "assets/img/Smiley.svg"

const SmileySun = () => {
    return (
        <div className="sun-smiley">
            <SUN className="sun" /> <SMILEY className="smiley" />
        </div>
    )
}

export default SmileySun
