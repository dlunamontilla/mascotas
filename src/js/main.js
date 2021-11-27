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

    register.onsubmit = async (e) => {
        e.preventDefault();
        const data = getFormData(register);

        // Registrar nuevos usuarios:
        await fetch(register.action, {
            method: register.method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
    }
}

formRegister();