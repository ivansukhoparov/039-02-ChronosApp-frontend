import {app, errorPopup} from "../index.js";
import {Menu} from "./menu.js";
import {serverResponse} from "./testData.js";
import {registrationFormTemplate} from "./templates.js";

export class RegistrationPopup {
    #frame = registrationFormTemplate.cloneNode(true)
    #app = app

constructor() {
}

    createPopup() {
        // const submitButton = this.#frame.querySelector("#registration-submit")
        // submitButton.addEventListener("click", (evt) => {
        //     evt.preventDefault();
        //     errorPopup.isErrorsHighlight()
        //     const login = this.#frame.querySelector("#login-ot-email").value
        //     const password = this.#frame.querySelector("#password").value
        //
        //     this.sendRequest(login, password)
        // })
        this.#app.render(this.#frame)
    }

    sendRequest(login, password) {
        if (login === "qwe" && password === "qweasd") {
            console.log("access confirmed")
            new Menu()
            app.createTasksEntities(serverResponse)
            app.renderTasks()
            return {token: "qweasdzxc"}
        } else {
            const testErrorsArray = [{field: "login", message: "not found"},
                {field: "password", message: "not correct"}]
            errorPopup.throwErrors(testErrorsArray)
        }
    }
}