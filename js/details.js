let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let events = []

async function traerDatos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(datosApi => {
           events = datosApi.events
            console.log("muestro array total");
            console.log(events)


const contenedorCars = document.querySelector('#contenedor')

const _id = window.location.hash.substring(1);
const eventosPasados = events.filter(e => e._id == _id);
contenedorCars.innerHTML = eventosPasados

let carsGeneradas = crearCars(eventosPasados)

contenedorCars.innerHTML = carsGeneradas

function crearCars(eventosPasados){
  let cars = ''
  for (const event of eventosPasados){
    cars += `<div class="card text-bg-secondary mb-3" style="max-width: 700px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${event.image}" class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <p class="card-text">${event.place}</p>
        </div>
      </div>
    </div>
  </div>`
}
return cars
}
})

.catch(error => console.log(error.message))
}
traerDatos()
