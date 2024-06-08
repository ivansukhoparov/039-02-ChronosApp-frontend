import { startsScreenTemplate} from "../templates.js";
import {app} from "../../index.js";
import {SignInForm} from "./forms/signInForm.js";
import {SignUpForm} from "./forms/signUpForm.js";


export class StartScreen{
    #frame = startsScreenTemplate.cloneNode(true)
    #app= app

    constructor() {
        this.addEvents()
        this.#app.render(this.#frame)
    }

    addEvents(){
        const signInForm = new SignInForm()
        const signUpForm = new SignUpForm()
        this.#frame.querySelector("#sign-in").addEventListener("click", (evt)=>{
            evt.preventDefault()

            signInForm.showForm()
        })
        this.#frame.querySelector("#sign-up").addEventListener("click", (evt)=>{
            evt.preventDefault()

            signUpForm.showForm()
        })
    }
}
