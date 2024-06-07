import {errorPopup} from "../index.js";

export class LoginPopup {
    #frame
    #app

    constructor(app, template) {
        this.#app = app
        this.#frame = template.cloneNode(true)
    }

    createPopup() {
        const submitButton = this.#frame.querySelector("#login-submit")
        submitButton.addEventListener("click", (evt) => {
            evt.preventDefault();
            errorPopup.isErrorsHighlight()
            const login = this.#frame.querySelector("#login-ot-email").value
            const password = this.#frame.querySelector("#password").value

            this.sendRequest(login, password)
        })
        this.#app.render(this.#frame)
    }

    sendRequest(login, password) {
        if (login === "qwe" && password === "qweasd") {
            console.log("access confirmed")
            return {token: "qweasdzxc"}
        } else {
            const testErrorsArray = [{field: "login", message: "not found"},
                {field: "password", message: "not correct"}]
            errorPopup.throwErrors(testErrorsArray)
        }
    }
}