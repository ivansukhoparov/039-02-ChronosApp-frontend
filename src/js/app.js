import {contentArea} from "./templates.js";
import {Task} from "./tasksFrame.js";

export class App {
    tasks
    activeTask

    constructor(contentArea) {
        this.contentArea = contentArea
    }

    render(element, clear = false) {
        if (clear) {
            contentArea.innerHTML = ""
        }
        contentArea.appendChild(element)
    }

    createTasksEntities(serverResponse) {
        this.tasks = serverResponse.map(el => new Task(el))
    }

    renderTasks() {
        contentArea.innerHTML = ""
        this.tasks.forEach(task => {
            let isActive = false
            if (task.id === this.activeTask) isActive = true

            const taskFrame = task.getFrame(isActive)
            if (isActive) taskFrame.classList.add("task--selected")
            this.render(taskFrame)
        })
    }


}