let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let events = [];

async function traerDatos() {
  fetch(urlApi)
    .then((response) => response.json())
    .then((datosApi) => {
      events = datosApi.events;
      const currentDate = "2023-03-10";
      const eventosPasados = events.filter((e) => e.date <= currentDate);

      console.log("muestro array total");
      console.log(events);

      const contenedorCars = document.querySelector("#contenedor");
      const contenedorCategorias = document.getElementById(
        "contenedorCategorias"
      );

      let carsGeneradas = crearCars(eventosPasados);
      contenedorCars.innerHTML = carsGeneradas;

      function crearCars(eventos) {
        let cars = "";
        for (const event of eventos) {
          cars += `<div class="card text-black text-bg-secondary" style="width: 18rem;">
              <img src="${event.image}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text flex-grow-1">${event.description}</p>
              <a href="${"/details.html#" + event._id}" class="btn btn-primary">Details</a>
              </div>
              </div>`;
        }
        return cars;
      }

      function filtrarPorCategorias(categoriasSeleccionadas) {
        const eventosFiltrados = eventosPasados.filter((evento) =>
          categoriasSeleccionadas.includes(evento.category)
        );
        carsGeneradas = crearCars(eventosFiltrados);
        contenedorCars.innerHTML = carsGeneradas;

        if(arrayFiltrado.length > 0){
          crearCars (arrayFiltrado);
        }else{
          contenedorCars.innerHTML = '<p>No se encontraron resultados</p>';
        }
      }

      // Obtener todas las categorías disponibles
      const categorias = Array.from(
        new Set(events.map((events) => events.category))
      );

      // Mostrar checkboxes para cada categoría
      const checkboxes = categorias
        .map(
          (categoria) =>
            `<div class="form-check">
              <input class="form-check-input" type="checkbox" value="${categoria}" id="${categoria}">
              <label class="form-check-label" for="${categoria}">
                ${categoria}
            </label>
            </div>`
        )
        .join("");
      contenedorCategorias.innerHTML = checkboxes;

      // Escuchar los eventos 'change' de los checkboxes
      const checkboxInputs = document.querySelectorAll(
        "#contenedorCategorias input[type=checkbox]"
      );

      checkboxInputs.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const categoriasSeleccionadas = Array.from(checkboxInputs)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

          if (categoriasSeleccionadas.length === 0) {
            contenedorCars.innerHTML = crearCars(eventosPasados);
          } else {
            filtrarPorCategorias(categoriasSeleccionadas);
          }
        });
      });

      contenedorCars.innerHTML = crearCars(eventosPasados);
    })
    .catch((error) => console.log(error.message));
}
traerDatos();


    