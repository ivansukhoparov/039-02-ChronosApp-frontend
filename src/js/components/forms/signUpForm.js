import {app} from "../../../index.js";
import {registrationFormTemplate} from "../../templates.js";
import {BaseFormClass} from "./_baseFormClass.js";

export class SignUpForm extends BaseFormClass{

constructor() {
        super(registrationFormTemplate, app)
}

    // createPopup() {
    //     // const submitButton = this.#frame.querySelector("#registration-submit")
    //     // submitButton.addEventListener("click", (evt) => {
    //     //     evt.preventDefault();
    //     //     errorPopup.isErrorsHighlight()
    //     //     const login = this.#frame.querySelector("#login-ot-email").value
    //     //     const password = this.#frame.querySelector("#password").value
    //     //
    //     //     this.sendRequest(login, password)
    //     // })
    //     this._app.render(this._frame)
    // }

    // sendRequest(login, password) {
    //     if (login === "qwe" && password === "qweasd") {
    //         console.log("access confirmed")
    //         new Menu()
    //         app.createTasksEntities(serverResponse)
    //         app.renderTasks()
    //         return {token: "qweasdzxc"}
    //     } else {
    //         const testErrorsArray = [{field: "login", message: "not found"},
    //             {field: "password", message: "not correct"}]
    //         errorPopup.throwErrors(testErrorsArray)
    //     }
    // }
}