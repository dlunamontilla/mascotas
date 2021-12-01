import { isButton, isDiv } from "./evaluate.js";

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
    const button =
        typeof selector === "string"
            ? document.querySelector(selector)
            : isButton(selector)
            ? selector
            : [];

    if (!button) return;

    const modalContainer = document.querySelector("#modal-container");
    if (!modalContainer) return;

    button.onclick = () => {
        modalContainer.classList.remove("modal-container--show");
    };
};

/**
 *
 * @param {number} id Ingrese el identificador para
 * cargar los datos a la ventana modal de las mascotas.
 *
 * @param {string | HTMLDivElement}
 *
 * @returns { void }
 */
const openModal = (id, selector) => {
    if (isNaN(id)) return;

    /** @type {HTMLDivElement | null} */
    const modalContainer =
        typeof selector === "string"
            ? document.querySelector(selector)
            : isDiv(selector)
            ? selector
            : null;

    if (!isDiv(container)) return;

    modalContainer.classList.add("modal-container--show");
};

// Probar el botón:
exitModal("#exit-modal");

export { openModal };
