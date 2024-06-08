import {contentArea, errorMessagesTemplate, loginFormTemplate} from "./js/templates.js";
import {App} from "./js/app.js";
import {SignInForm} from "./js/components/forms/signInForm.js";
import {ErrorFrame} from "./js/components/error.js";

import {SignUpForm} from "./js/components/forms/signUpForm.js";
import {StartScreen} from "./js/components/start-screen.js";


export const app = new App(contentArea)
export const errorPopup = new ErrorFrame(app, errorMessagesTemplate)
// const loginPopup = new LoginPopup(app, loginFormTemplate)
// loginPopup.createPopup()
// const registrationPopup = new SignUpForm()
// registrationPopup.createPopup()


new StartScreen()