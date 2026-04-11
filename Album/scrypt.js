document.addEventListener("DOMContentLoaded", ()=>{

  fetch("./imagenes.json")
  .then(response => response.json())
  .then(data => {

    const galeria = document.getElementById("galeria");

    data.imagenes.forEach((item, index) => {

      const contenedor = document.createElement("div");

      contenedor.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="modal${index}" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Detalle</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <p>${item.nota}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Imagen -->
        <img 
          src="${item.src}" 
          width="200"
          style="cursor:pointer"
          data-bs-toggle="modal"
          data-bs-target="#modal${index}"
        >
      `;

      galeria.appendChild(contenedor);
    });

  })
  .catch(error => console.error("Error cargando JSON:", error));

});
/* 
            <p></p> */