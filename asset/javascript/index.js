import { citasBiblicas } from '../javascript/citasBiblicas.js';

const btnEnviar = document.querySelector("#enviar");
const inputNombre = document.querySelector("#nombre");

// Crear contenedor principal
const mainContainer = document.createElement("div");
mainContainer.id = "citas-container";
mainContainer.style.margin = "20px auto";
mainContainer.style.maxWidth = "800px";
mainContainer.style.textAlign = "center";
document.body.appendChild(mainContainer);

// Evento para manejar clic en el botón "Enviar"
btnEnviar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return;
    }


    mainContainer.innerHTML = "";
    agregarCitaAleatoria(nombre);

    inputNombre.value = "";
    alert(`Nombre ingresado: ${nombre}. Se ha agregado una nueva promesa.`);
});

// Función para agregar una cita aleatoria
function agregarCitaAleatoria(nombre) {
    const citaAleatoria = citasBiblicas[Math.floor(Math.random() * citasBiblicas.length)];
    console.log(citaAleatoria)

    const contenedor = document.createElement("div");
    contenedor.classList.add("cita-container");
    contenedor.style.border = "1px solid #ccc";
    contenedor.style.borderRadius = "10px";
    contenedor.style.padding = "20px";
    contenedor.style.margin = "20px 0";
    contenedor.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

    contenedor.innerHTML = `
    <h3>${citaAleatoria.cita}</h3>
    <p><strong>Versículo:</strong> ${citaAleatoria.texto}</p>
    <p><strong>Lo que quiere decir es:</strong> ${citaAleatoria.parafraseo}</p>
     <img src="${citaAleatoria.imagen}" alt="Imagen Bíblica" style="max-width: 100%; height: auto;">
    <p style="color: green; font-weight: bold;"> Esta promesa es para ti, ${nombre}.</p>
`;

    mainContainer.appendChild(contenedor);
}
