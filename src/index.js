import {contentArea, errorMessagesTemplate, loginFormTemplate} from "./js/templates.js";


function createLoginScreen() {
    const loginForm = loginFormTemplate.cloneNode(true)
    const submitButton = loginForm.querySelector("#login-submit")

    submitButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        isErrorsHighlight()
        const login = loginForm.querySelector("#login-ot-email").value
        const password = loginForm.querySelector("#password").value

        loginRequest(login, password)
    })

    contentArea.appendChild(loginForm)
    //   contentArea.innerHTML = loginForm
}

function loginRequest(login, password) {
    if (login === "qwe" && password === "qweasd") {
        console.log("access confirmed")
        return {token: "qweasdzxc"}
    } else {
        const testErrorsArray = [{field: "login", message: "not found"},
            {field: "password", message: "not correct"}]
        errorHandler(testErrorsArray)
    }
}

function errorHandler(errors) {

    const errorMessages = errorMessagesTemplate.cloneNode(true)
    const errorTextTemplate = errorMessages.querySelector(".error__message")
    const errorsMessagesArea = errorMessages.querySelector(".error__messages-area")
    const closeButton = errorMessages.querySelector(".close-button")
    errorsMessagesArea.innerHTML = ""

    errors.forEach((err) => {
        const newErrorText = errorTextTemplate.cloneNode(true)
        newErrorText.innerHTML = `${err.message} in ${err.field} field`
        errorsMessagesArea.appendChild(newErrorText)
    })

    closeButton.addEventListener("click", (evt) => {
        evt.preventDefault()
        contentArea.removeChild(errorMessages)
    })

    contentArea.appendChild(errorMessages)
}

function isErrorsHighlight(){
    if (contentArea.querySelector(".error") !== null) {
        contentArea.removeChild(contentArea.querySelector(".error"))
    }
}

createLoginScreen()