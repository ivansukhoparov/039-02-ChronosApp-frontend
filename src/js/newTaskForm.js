import {contentArea, newTaskFormTemplate} from "./templates.js";
import {app} from "../index.js";

export class NewTaskForm {
    #frame = newTaskFormTemplate.cloneNode(true)
    #app = app

    constructor() {
        this.addEvents()

    }

    addEvents(){
        const closeButton = this.#frame.querySelector(".close-button")
        closeButton.addEventListener("click", (evt) => {
            evt.preventDefault()
            this.#app.contentArea.removeChild(this.#frame)
        })
    }


    showForm() {
        this.#app.render(this.#frame, false)
    }



}