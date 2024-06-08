import {contentArea, editTaskFormTemplate, loginFormTemplate, newTaskFormTemplate} from "../../templates.js";
import {app} from "../../../index.js";
import {BaseFormClass} from "./_baseFormClass.js";

export class EditTaskForm extends BaseFormClass{



    constructor(task) {
        super(editTaskFormTemplate, app)
       this.fillForm(task)
        this.addEvents()
        this.showForm()
    }

    fillForm(task) {
        this._frame.querySelector("#company-name").value = task.companyName
        this._frame.querySelector("#project-name").value = task.projectName
        this._frame.querySelector("#budget").value = task.budget
        this._frame.querySelector("#currency").value = task.currency
        this._frame.querySelector("#today-time").value = task.todayTime
        this._frame.querySelector("#started-at").value = task.startedAt
        if (task.isClosed) {
            this._frame.querySelector("#is-closed").checked = true
            this._frame.querySelector("#closed-at").value = task.closedAt
        } else {
            this._frame.querySelector("#closed-at").disabled = true
        }

    }

    addEvents() {
        this._frame.querySelector(".close-button").addEventListener("click", (evt) => {
            evt.preventDefault()
            this. _app.contentArea.removeChild(this._frame)
        })

        this._frame.querySelector("#is-closed").addEventListener("change",()=>{
            this._frame.querySelector("#closed-at").disabled = !this._frame.querySelector("#is-closed").checked
        })
    }




}