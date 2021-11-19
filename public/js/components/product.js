export const Producto = (productoId, imagen, nombre, descripcion,precio,marca, url) =>`
<div class="container-fluid">
<div class="row">
  <div class="col-md-8 mx-auto">
    <img class="h-50" alt="Bootstrap Image Preview" src="${imagen}" />
  </div>
  <div class="col-md-4">
    <h3 class="text-center text-warning">
      ${nombre}
    </h3>
    <dl>
      <dt>Marca:</dt>
      <dd>${marca}</dd>
      <dt> Modelo:</dt>
      <dd>Modelo</dd>
      <dt>Descripcion:</dt>
      <dd>${descripcion}</dd>
      <dt><a href="${url}" target="_blank">Link para mas detalles</a></dt>
      
    </dl> 
    <h3 class="text-center text-warning">
    $${precio}
    </h3>
    <span id="boton-agregarcarrito"><a href="#"></a></span>
    
  </div>
</div>
</div>
`