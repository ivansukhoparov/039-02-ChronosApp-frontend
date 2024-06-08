import {app, errorPopup} from "../index.js";
import {taskExtendedTemplate, taskPreviewTemplate} from "./templates.js";
import {EditTaskForm} from "./editTaskForm.js";


export class Task {
    #task

    #taskId = 12902123;
    #companyName = "ESK";
    #projectName = "024 081 1 Greenaland";
    #category
    #budget = 1000;
    #currency = "rub";
    #totalTime = "10=02=00=00";
    #todayTime = "1=56=01";
    #sessionTime
    #cost = 500;
    #startedAt = "25.08.2024";
    #closedAt = null
    #updatedAt
    #isClosed
    // #isActive = false


    #framePreview = taskPreviewTemplate.cloneNode(true)
    #frameExtended = taskExtendedTemplate.cloneNode(true)
    #app = app

    constructor(taskInfo) {
        this.#task = {...taskInfo,
            sessionTime:0}
        // this.#taskId = taskInfo.taskId
        // this.#companyName = taskInfo.companyName
        // this.#projectName = taskInfo.projectName
        // this.#category = taskInfo.category
        // this.#budget = taskInfo.budget
        // this.#currency = taskInfo.currency
        // this.#totalTime = taskInfo.totalTime
        // this.#cost = taskInfo.cost
        // this.#todayTime = taskInfo.todayTime
        // this.#startedAt = taskInfo.startedAt
        // this.#closedAt = taskInfo.closedAt
        // this.#updatedAt = taskInfo.updatedAt

        this.#framePreview.addEventListener("click", (evt) => {
            evt.preventDefault();
            app.activeTask = this.id
            app.renderTasks()
        })

        this.#frameExtended.querySelector(".task__button--edit").addEventListener("click",(evt)=>{
            evt.preventDefault()
            new EditTaskForm(this.#task)
        })
    }


    createPreview() {
        this.#framePreview.querySelector(".company-name").innerHTML = this.#task.companyName
        this.#framePreview.querySelector(".project-name").innerHTML = this.#task.projectName
        this.#framePreview.querySelector(".budget-info").innerHTML = this.#task.budget + " " + this.getCurrencySymbol(this.#task.currency)

        if (this.#closedAt !== null) {
            this.#framePreview.classList.add("task--closed")
        }
    }

    createExtended() {
        this.#frameExtended.querySelector(".company-name").innerHTML = this.#task.companyName
        this.#frameExtended.querySelector(".project-name").innerHTML = this.#task.projectName
        this.#frameExtended.querySelector(".budget-info").innerHTML = this.#task.budget + " " + this.getCurrencySymbol(this.#task.currency)
        this.#frameExtended.querySelector(".total-time-info").innerHTML = this.#task.totalTime
        this.#frameExtended.querySelector(".cost-info").innerHTML = this.#task.cost
        this.#frameExtended.querySelector(".session-time-info").querySelector("span").innerHTML = this.#task.sessionTime
        this.#frameExtended.querySelector(".today-time-info").querySelector("span").innerHTML = this.#task.todayTime
        this.#frameExtended.querySelector(".started-date").querySelector("span").innerHTML = this.#task.startedAt
        this.#frameExtended.querySelector(".closed-date").querySelector("span").innerHTML = this.#task.closedAt


    }

    getFrame(isActive) {
        if (isActive===true) {
            this.createExtended()
            return this.#frameExtended
        } else {
            this.createPreview()
            return this.#framePreview
        }
    }

    getCurrencySymbol(currency) {
        return currency
    }

    get id() {
        return this.#task.taskId
    }

}