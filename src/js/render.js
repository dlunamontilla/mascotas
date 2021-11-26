/**
 * Este archivo es para uso temporal mientras se arma el proyecto 
 * para separar por módulos los archivos HTML.
 */

/**
 * 
 * @param {string} url Obtener un módulo en formato d texto
 * 
 * @param {string} selector Ingrese un selector como parámetro
 * para seleccionar capturar el elemento HTML al que agregaremos
 * nuestro módulo.
 * 
 */
const getModule = async (url, selector) => {
    const module = document.querySelector(selector);
    if (!module) return;

    const response = await fetch(url);
    const data = await response.text();

    module.insertAdjacentHTML('beforeend', data.trim());
}

export default getModule;