import createElement from "./createElement.js";

/**
 *
 * @param {string} url Ingrese la ruta del archivo JSON para obtener
 * los datos de los animales.
 *
 * @param {string | HTMLDivElement} selector
 * 
 * @param {string} especie 
 * Este parámetro es opcional y tiene como animal por defecto
 * los gatos.
 * 
 */
const getAnimals = async (url, selector, especie = "gatos") => {
    /**
     * @type {HTMLDivElement|null}
     */
    const container =
        typeof selector === "string"
            ? document.querySelector(selector)
            : isDiv(selector)
            ? selector
            : null;

    if (typeof url !== "string" || !container) return;

    const response = await fetch(url);
    const data = await response.json();

    const animals = data[especie];
    if (!Array.isArray(animals)) return;

    const [cards] = createElement("div");

    cards.classList.add(".animal-card");

    animals.forEach(animal => {
        const {nombre, raza, imagen} = animal;

        cards.insertAdjacentHTML(
            'beforeend',

            `<a href="#" class="animal-card__item">
                <div class="animal-card__item__photo">
                    <img src="${imagen}" alt="${nombre}" />
                </div>
                
                <div class="animal-card__item__description">
                    <h4>${nombre}</h4>
                    <p>${raza}</p>
                </div>
            </a>`
        );
    });

    container.appendChild(cards);
};

export { getAnimals };
