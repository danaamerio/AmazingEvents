//cards
const contenedorCars = document.querySelector('#contenedor')

let carsGeneradas = crearCars(events)

contenedorCars.innerHTML = carsGeneradas

function crearCars(arrayDatos){
  let cars = ''
  for (const event of arrayDatos){
    cars += `<div class="card text-black text-bg-secondary" style="width: 18rem;">
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
//categorias

const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {

    const categoriasSeleccionadas = [];
    checkboxes.forEach(cb => {
      if (cb.checked) {
        categoriasSeleccionadas.push(cb.value);
      }
    });
   
    
    const events = document.querySelector('.category');
    events.innerHTML = "";
    events.forEach(events => {
 
      if (categoriasSeleccionadas.some(cat => events.category === cat)) {
        events.innerHTML += `<div>${events.cars}</div>`;
      }
    });
  });
});




//buscador
let buttonEvents= document.getElementById("#boton")
let checkboxEvents=document.querySelector("#categorias");

function categoryCheckFilter (arrData){
  let category = [];
  for(let i=0; i<arrData.length; i++){
    if(arrData[i].checked){
      category.push(arrData[i].value);
    }
  }
  return category;
}


buttonEvents.addEventListener("click",(e)=>{ 
  e.preventDefault();
  homeCards.innerHTML="";
  let searchEvent=document.getElementById("search").value;
  console.log(searchEvent);
  let eventsearch=data.events.filter(data.events(e.category.toLowerCase().includes(searchEvent.toLowerCase())&&searchEvent !="")||event.descripcion.toLowerCase().includes(searchEvent.toLowerCase()));
  let category=categoryCheckFilter(checkboxEvents);
  let eventsCheck = data.events.filter(event=> category.includes(event.category));
  let bothArr= eventsearch.concat(eventsCheck);
  homecars.innerHTML =indexCars(bothArr);
})















