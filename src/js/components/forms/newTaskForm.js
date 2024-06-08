import {contentArea, editTaskFormTemplate, newTaskFormTemplate} from "../../templates.js";
import {app} from "../../../index.js";
import {BaseFormClass} from "./_baseFormClass.js";

export class NewTaskForm extends BaseFormClass{

    constructor() {
        super(newTaskFormTemplate, app)
        this.addEvents()

    }

    addEvents(){
        const closeButton = this._frame.querySelector(".close-button")
        closeButton.addEventListener("click", (evt) => {
            evt.preventDefault()
            this. _app.contentArea.removeChild(this._frame)
        })
    }




}