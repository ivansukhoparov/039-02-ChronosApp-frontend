import {app, errorPopup, fetchAdapter} from "../../../index.js";
import {serverResponse} from "../../testData.js";
import {Menu} from "../menu.js";
import {BaseFormClass} from "./_baseFormClass.js";
import {loginFormTemplate} from "../../templates.js";

export class SignInForm extends BaseFormClass {
    #submitButton = this._frame.querySelector(".submit-button")

    constructor() {
        super(loginFormTemplate, app)
        this.addSubmitAction()
    }

    addSubmitAction() {
        this.#submitButton.addEventListener("click", (evt) => {
                evt.preventDefault()
                const formData = this.collectFormValues()
                this.#submitButton.disabled = true
                this.login(formData)
            }
        )
    }

    async login(formData) {
        try {
            const res = await fetchAdapter.post("/auth/login", formData)

            if (res.accessToken !== undefined) {
                fetchAdapter.setAccessToken(res.accessToken)
                const tasks = await fetchAdapter.get("/tasks")
                console.log("access confirmed")
                new Menu()
                app.createTasksEntities(tasks)
                app.renderTasks()
            } else {
                errorPopup.throwErrors(res)
                this.#submitButton.disabled=false
            }
        } catch {
            errorPopup.throwErrors([{message: "server unavailable", field: "_"}])
            this.#submitButton.disabled=false
        }

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

    async sendRequest(login, password) {
        if (login === "qwe" && password === "qweasd") {
            const res = await fetchAdapter.get("/tasks")

            console.log("access confirmed")
            console.log(res)
            new Menu()
            app.createTasksEntities(res)
            app.renderTasks()
            return {token: "qweasdzxc"}
        } else {
            const testErrorsArray = [{field: "login", message: "not found"},
                {field: "password", message: "not correct"}]
            errorPopup.throwErrors(testErrorsArray)
        }
    }
}