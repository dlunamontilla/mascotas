import {isButton} from "./evaluate.js";

// @ts-check

/**
 * 
 * @param {string | HTMLButtonElement} selector 
 * Ingrese como parámetro un selector o botón como elemento
 * HTML.
 * 
 */
const exitModal = (selector) => {
    /** @type {HTMLButtonElement} */
    const button = typeof selector === "string"
        ? document.querySelector(selector)
        : isButton(selector)
        ? selector : [];

    if (!button) return;

    const modalContainer = document.querySelector("#modal-container");
    if (!modalContainer) return;

    button.onclick = () => {
        modalContainer.classList.add("modal-container--hidden");
    }
};

// Probar el botón:
exitModal("#exit-modal");