import {contentArea, errorMessagesTemplate, loginFormTemplate} from "./js/templates.js";
import {App} from "./js/app.js";
import {LoginPopup} from "./js/loginPopup.js";
import {ErrorPopup} from "./js/errorPopup.js";


const app = new App(contentArea)
export const errorPopup = new ErrorPopup(app, errorMessagesTemplate)
const loginPopup = new LoginPopup(app, loginFormTemplate)
loginPopup.createPopup()