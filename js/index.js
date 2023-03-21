let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

async function traerDatos() {
  fetch(urlApi)
    .then((response) => response.json())
    .then((datosApi) => {
      let arrayGral = datosApi.events;
      console.log("muestro array total");
      console.log(arrayGral);

      const contenedor = document.getElementById("contenedor");
      const contenedorCategorias = document.getElementById("contenedorCategorias");
      const inputBusqueda = document.getElementById("inputBusqueda");

      function crearCards(arrayDatos) {
        let cards = "";
        for (const dataArray of arrayDatos) {
          cards += `<div class="card text-black text-bg-secondary" style="width: 18rem;">
                        <img src="${dataArray.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${dataArray.name}</h5>
                                <p class="card-text flex-grow-1">${dataArray.description}</p>
                                <a href="${'/details.html#'+dataArray._id}" class="btn btn-primary">Details</a>
                            </div>
                    </div>`;
        }
        contenedor.innerHTML = cards;
      }


      function filtrarPorCategorias(categoriasSeleccionadas) {
        const arrayFiltrado = arrayGral.filter((evento) =>
          categoriasSeleccionadas.includes(evento.category)
        );
        crearCards(arrayFiltrado);
      }

      // Obtener todas las categorías disponibles
      const categorias = Array.from(
        new Set(arrayGral.map((evento) => evento.category))
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
        checkbox.addEventListener("change", (event) => {
          const categoriasSeleccionadas = Array.from(
            checkboxInputs
          )
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

          if (categoriasSeleccionadas.length === 0) {
            crearCards(arrayGral);
          } else {
            filtrarPorCategorias(categoriasSeleccionadas);
          }
        });
      });

      crearCards(arrayGral);
    })
    .catch((error) => console.log(error.message));
}

traerDatos();
