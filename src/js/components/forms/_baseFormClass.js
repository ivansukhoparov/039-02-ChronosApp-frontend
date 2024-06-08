import {editTaskFormTemplate} from "../../templates.js";
import {app} from "../../../index.js";

export class BaseFormClass {
    _frame
    _app

    constructor(formTemplate, app) {
        this._frame = formTemplate.cloneNode(true)
        this. _app = app
        this.addCloseButton()
    }

    addCloseButton() {
        this._frame.querySelector(".close-button").addEventListener("click", (evt) => {
            evt.preventDefault()
            this. _app.contentArea.removeChild(this._frame)
        })
    }

    showForm() {
        this. _app.render(this._frame, false)
    }
}