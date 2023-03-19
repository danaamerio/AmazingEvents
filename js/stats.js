let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let events = []

async function traerDatos() {
  fetch(urlApi)
    .then(response => response.json())
    .then(datosApi => {
      events = datosApi.events
      currentDate = "2023-03-10"
      console.log("muestro array total");
      console.log(events)

      const contenedor1 = document.querySelector('#contenedorTabla1');
 
     let tablaHTML1 = `
        <table class="table table-bordered">
          <h3>EVENTS STATISTICS </h3> 
          <tr>
            <th>Events with the highest percentage of attendance</th>
            <th>Events with the lowest percentage of attendance</th>
            <th>Events with larger capacity</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>`;
      contenedor1.innerHTML = tablaHTML1;

      const contenedor2 = document.querySelector('#contenedorTabla2');
      let tablaHTML2 = `
        <table class="table table-bordered">
          <h3>UPCOMING EVENTS STATISTICS BY CATEGORY</h3> 
          <tr>
          <th>Categories</th>
          <th>Revenues</th>
          <th>Percentage of attendance</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>`;
      contenedor2.innerHTML = tablaHTML2;

      const contenedor3 = document.querySelector('#contenedorTabla3');
      let tablaHTML3 = `
        <table class="table table-bordered">
          <h3>PAST EVENTS STATISTICS BY CATEGORY </h3> 
          <tr>
          <th>Categories</th>
          <th>Revenues</th>
          <th>Percentage of attendance</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>`;
      contenedor3.innerHTML = tablaHTML3;
    })
    .catch(error => console.error('Error:', error));
}

traerDatos();