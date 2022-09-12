import {enable, disable} from "./cookies";

(() => {
    window.ElectronCookies = {
        enable,
        disable
    }
})()

export {
    enable,
    disable
}

