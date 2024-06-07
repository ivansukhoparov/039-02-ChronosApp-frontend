import {contentArea} from "./templates.js";

export class App {
    constructor(contentArea) {
        this.contentArea = contentArea
    }

    render(element, clear = false) {
        if (clear) {
            contentArea.innerHTML = ""
        }
        contentArea.appendChild(element)
    }
}