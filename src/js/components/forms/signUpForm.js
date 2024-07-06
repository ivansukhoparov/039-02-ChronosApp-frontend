import {app, errorPopup, fetchAdapter} from "../../../index.js";
import {registrationFormTemplate} from "../../templates.js";
import {BaseFormClass} from "./_baseFormClass.js";
import {Menu} from "../menu.js";
import {HTTP_STATUSES} from "../../settings.js";

export class SignUpForm extends BaseFormClass{
        #submitButton = this._frame.querySelector(".submit-button")
constructor() {
        super(registrationFormTemplate, app)
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

        async registration(formData) {
                try {
                        const res = await fetchAdapter.post("/auth/registration", formData)

                        if (res.status === HTTP_STATUSES.NO_CONTENT_204) {
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