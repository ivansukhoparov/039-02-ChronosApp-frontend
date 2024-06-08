import {contentArea, editTaskFormTemplate, newTaskFormTemplate} from "../../templates.js";
import {app} from "../../../index.js";

export class EditTaskForm {

    #frame = editTaskFormTemplate.cloneNode(true)
    #app = app

    constructor(task) {
       this.fillForm(task)
        this.addEvents()
        this.showForm()
    }

    fillForm(task) {
        this.#frame.querySelector("#company-name").value = task.companyName
        this.#frame.querySelector("#project-name").value = task.projectName
        this.#frame.querySelector("#budget").value = task.budget
        this.#frame.querySelector("#currency").value = task.currency
        this.#frame.querySelector("#today-time").value = task.todayTime
        this.#frame.querySelector("#started-at").value = task.startedAt
        if (task.isClosed) {
            this.#frame.querySelector("#is-closed").checked = true
            this.#frame.querySelector("#closed-at").value = task.closedAt
        } else {
            this.#frame.querySelector("#closed-at").disabled = true
        }

    }

    addEvents() {
        this.#frame.querySelector(".close-button").addEventListener("click", (evt) => {
            evt.preventDefault()
            this.#app.contentArea.removeChild(this.#frame)
        })

        this.#frame.querySelector("#is-closed").addEventListener("change",()=>{
            this.#frame.querySelector("#closed-at").disabled = !this.#frame.querySelector("#is-closed").checked
        })
    }


    showForm() {
        this.#app.render(this.#frame, false)
    }


}