import {loginFormTemplate, startsScreenTemplate} from "./templates.js";
import {app} from "../index.js";
import {LoginPopup} from "./loginPopup.js";
import {RegistrationPopup} from "./registrationPopup.js";


export class StartScreen{
    #frame = startsScreenTemplate.cloneNode(true)
    #app= app

    constructor() {
        this.addEvents()
        this.#app.render(this.#frame)
    }

    addEvents(){
        this.#frame.querySelector("#sign-in").addEventListener("click", (evt)=>{
            evt.preventDefault()
            const loginPopup = new LoginPopup(app, loginFormTemplate)
            loginPopup.createPopup()
        })
        this.#frame.querySelector("#sign-up").addEventListener("click", (evt)=>{
            evt.preventDefault()
            const registrationPopup = new RegistrationPopup()
            registrationPopup.createPopup()
        })
    }
}
