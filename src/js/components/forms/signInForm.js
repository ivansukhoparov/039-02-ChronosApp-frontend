import {app, errorPopup} from "../../../index.js";
import {serverResponse} from "../../testData.js";
import {Menu} from "../menu.js";
import {BaseFormClass} from "./_baseFormClass.js";
import {loginFormTemplate} from "../../templates.js";

export class SignInForm extends BaseFormClass {

    constructor() {
        super(loginFormTemplate, app)
        this.addEvents()
    }

    addEvents() {
        this._frame.querySelector("#login-submit").addEventListener("click", (evt) => {
            evt.preventDefault();
            errorPopup.isErrorsHighlight()
            const login = this._frame.querySelector("#login-ot-email").value
            const password = this._frame.querySelector("#password").value

            this.sendRequest(login, password)
        })
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