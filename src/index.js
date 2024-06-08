import {contentArea, errorMessagesTemplate, loginFormTemplate} from "./js/templates.js";
import {App} from "./js/app.js";
import {LoginPopup} from "./js/loginPopup.js";
import {ErrorPopup} from "./js/errorPopup.js";

import {RegistrationPopup} from "./js/registrationPopup.js";
import {StartScreen} from "./js/start-screen.js";


export const app = new App(contentArea)
export const errorPopup = new ErrorPopup(app, errorMessagesTemplate)
// const loginPopup = new LoginPopup(app, loginFormTemplate)
// loginPopup.createPopup()
// const registrationPopup = new RegistrationPopup()
// registrationPopup.createPopup()


new StartScreen()