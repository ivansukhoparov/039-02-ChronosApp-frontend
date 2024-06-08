export class BaseFormClass {
    _frame
    _app

    constructor(formTemplate, app) {
        this._frame = formTemplate.cloneNode(true)
        this._app = app
        this.addCloseAction()
    }

    addCloseAction() {
        this._frame.querySelector(".close-button").addEventListener("click", (evt) => {
            evt.preventDefault()
            this._app.contentArea.removeChild(this._frame)
        })
    }

    collectFormValues() {
        const formFields = [...this._frame.querySelectorAll("input")]
        return formFields.reduce((acc, curr) => {
            if (curr.type === "checkbox") {
                acc[curr.name] = curr.checked
            } else {
                acc[curr.name] = curr.value
            }
            return acc
        }, {})
    }

    showForm() {
        this._app.render(this._frame, false)
    }
}