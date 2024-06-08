import {menuTemplate} from "./templates.js";
import {NewTaskForm} from "./newTaskForm.js";

export class Menu {
    #frame = menuTemplate.cloneNode(true)
#newTaskForm = new NewTaskForm()
    constructor() {
        this.showMenu()
        this.addEvents()
    }

    showMenu() {
        const            body = document.querySelector("body")
        body.appendChild(this.#frame)
    }

    addEvents(){
        this.#frame.querySelector("#add-new").addEventListener("click",()=>{
            this.#newTaskForm.showForm()
        })
    }
}