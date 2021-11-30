// @ts-check

/**
 * 
 * @param {any} algo Evaluar cualquier cosa que pase como parámetro.
 * 
 * @returns {string}
 * Debe retonar un string indicando el tipo ingresado como parámetro.
 */
const evaluate = (algo) => {
    return Object.prototype.toString.call(algo);
};



/**
 * 
 * @param {*} element Debe evaluar si efectivamente, el
 * elemento que pasa como parámetro es un elemento HTML
 * 
 * @returns {boolean}
 */
const isDiv = (element) => {
    return evaluate(element) === "[object HTMLDivElement]";
}