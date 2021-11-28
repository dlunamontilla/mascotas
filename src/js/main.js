import { getFormData } from "./register.js";
import getModule from "./render.js";
import {} from "./svg.js";

/**
 * Formulario de registro
 */
const formRegister = async () => {
    // Probando nuestra función:
    await getModule("src/html/registro.html", "#container");

    const register = document.querySelector("#form-register");
    if (!register) return;

    const passwords = register.querySelectorAll("[type='password']");

    const [a, b] = passwords;
    console.log(a, b);

    const coincide = (a, b) => {
        if (!(a || b)) return;

        if (a.value === b.value && a.value.trim().length > 4) {
            a.classList.add("form__text--pass");
            b.classList.add("form__text--pass");
            return;
        }

        a.classList.remove("form__text--pass");
        b.classList.remove("form__text--pass");
    };

    a.oninput = () => {
        coincide(a, b);
    };

    b.oninput = () => {
        coincide(b, a);
    };

    register.onsubmit = async (e) => {
        e.preventDefault();
        const data = getFormData(register);

        // Si el campo que se detecta es una contraseña la cifrará
        for (let key in data) {
            data[key] = key === "password" ? md5(data[key]) : data[key];
        }

        // Registrar nuevos usuarios:
        await fetch(register.action, {
            method: register.method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });
    };
};

// formRegister();

getModule("src/html/mascotas.html", "#container");



/**
 * Al seleccionar un menú de navegación con esta función debe
 * tomar en cuenta debe tener enlaces.
 * 
 * @param {string} selector
 * Debe ingresar un selector para seleccionar un menú. Es 
 * obligatorio que el menú tenga enlaces.
 * 
 * @returns { void }
 */
const menu = (selector) => {
    const menuHeader = document.querySelector(selector);
    if (!menuHeader) return;

    menuHeader.onclick = (e) => {
        e.preventDefault();
        const element = e.target;
        
        if (element.href) {
            getModule(element.href, "#container", true);
        }
    }
};

menu("#menu-header");