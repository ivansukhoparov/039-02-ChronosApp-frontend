import {contentArea} from "../templates.js";

export class MessageFrame {
    #frame
    #app

    constructor(app, template) {
        this.#app = app
        this.#frame = template.cloneNode(true)
    }

    throwErrors(errors) {

        const errorTextTemplate = this.#frame.querySelector(".error__message")
        const errorsMessagesArea = this.#frame.querySelector(".error__messages-area")
        const closeButton = this.#frame.querySelector(".close-button")
        errorsMessagesArea.innerHTML = ""

        errors.forEach((err) => {
            const newErrorText = errorTextTemplate.cloneNode(true)
            newErrorText.innerHTML = `${err.message} in ${err.field} field`
            errorsMessagesArea.appendChild(newErrorText)
        })

        closeButton.addEventListener("click", (evt) => {
            evt.preventDefault()
            this.#app.contentArea.removeChild(this.#frame)
        })

        this.#app.render(this.#frame, false)
    }

    isErrorsHighlight() {
        if (this.#app.contentArea.querySelector(".error") !== null) {
            this.#app.contentArea.removeChild(contentArea.querySelector(".error"))
        }
    }
}