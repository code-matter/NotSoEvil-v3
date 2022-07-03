import { message } from "antd"
import { Translation } from "react-i18next"

export const rules = {
    required: { required: true, message: "Ce champ est obligatoire." },
    maxLength: {
        type: "array",
        max: 5,
        message: "Veuillez choisir au maximum 5 références.",
    },
    email: { type: "email", message: "Veuillez entrer un courriel valide." },
    password: {
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d-]{8,}$/,
        message: "Le mot de passe doit contenir 8 caractères, au moins une lettre et un nombre.",
    },
    confirm_password: ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
            }
            return Promise.reject(new Error("Le mot de passe ne correspond pas"))
        },
    }),
    latlng: {
        pattern: /^(-?[0-9]{2}\.[0-9]{4})$/,
        message: "Veuillez entrer une localisation valide. Ex.: 00.0000",
    },
    url: {
        pattern:
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
        message: "Veuillez entrer une URL valide.",
    },
    phone: {
        pattern: /^[+]?[(]?([0-9]{3})[)]?[-\s.]?([0-9]{3})[-\s.]?([0-9]{4,6})$/im,
        message: "Veuillez entrer un numéro de téléphone valide. Ex.: (123) 123-1234",
    },
    hex: {
        pattern: /^#([a-zA-Z0-9]{3,6})$/,
        message: "Veuillez entrer une valeur hexadécimal valide. Ex.: #000000",
    },
    postal_code: {
        pattern: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[- ]{0,1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/,
        message: "Veuillez entrer un code postal valide. Ex.: A1A 1A1",
    },
    ip: {
        pattern:
            /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        message: "Veuillez entrer une adresse IP valide. Ex.: X.X.X.X",
    },
}
export const translate = (slug: string) => <Translation>{t => t(slug)}</Translation>

export const Feedback = {
    Async: class AsyncFeedback {
        key: number
        constructor(loadingText = translate("general.feedback.waiting")) {
            this.key = Date.now()
            message.loading({ content: loadingText, key: this.key })
        }

        success(text = translate("general.feedback.success")) {
            message.success({ content: text, key: this.key })
        }

        error(text = translate("general.feedback.error")) {
            message.error({ content: text, key: this.key })
        }
    },
    Info: (text: string) => {
        if (!text) return
        message.info(text)
    },
    Warn: (text: string) => {
        if (!text) return
        message.warn(text)
    },
    Error: (type: string, e = null) => {
        if (e) console.error(e)

        // if (e && e?.status === 401) {
        //     message.error(translate('general.feedback.disconnected'))
        //     return
        // }

        switch (type) {
            case "login-failed":
                message.error(translate("general.feedback.error_login_failed"))
                break
            case "loading-page":
                message.error(translate("general.feedback.error_loading_page"))
                break
            case "loading-selects":
                message.error(translate("general.feedback.error_loading_selects"))
                break
            default:
                message.error(translate("general.feedback.error"))
                break
        }
    },
}
