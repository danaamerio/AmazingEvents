
const contenedorCars = document.querySelector('#contenedor')

const eventosFuturos = events.filter(e => e.date >= currentDate);

contenedorCars.innerHTML = eventosFuturos




let carsGeneradas = crearCars(eventosFuturos)

contenedorCars.innerHTML = carsGeneradas

function crearCars(eventosFuturos){
  let cars = ''
  for (const event of eventosFuturos){
    cars += `<div class="card text-black" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text flex-grow-1">${event.description}</p>
      <a href="${'/details.html#'+event._id}" class="btn btn-primary">Details</a>
    </div>
 </div>`
}
return cars
}

