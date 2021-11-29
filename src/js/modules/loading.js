// @ts-check

/**
 * 
 * @param {HTMLElement} element Selector
 * 
 * @returns { string }
 * Devuelve como resultado el texto o contenido en formato de 
 * de texto sobre el elemento que se le aplique la animación
 * de carga.
 */
const getLoading = (element) => {
    if (!element) return;

    const template = document.querySelector("#loading-template");
    if (!template) return;

    //  @ts-ignore
    const loading = template.content.firstElementChild.cloneNode(true);
    
    const textElement = element.textContent;
    element.textContent = "";

    console.log( loading );

    // Aplicar animación de carga sobre el elemento seleccionado:
    element.appendChild(loading);

    return textElement;
}

export default getLoading;