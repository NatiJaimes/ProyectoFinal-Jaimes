# Proyecto Final React

- Comisión: 65640
- Alumna: Natalia Jaimes

### URL
```
https://proyecto-final-jaimes.vercel.app/
```

### Contenido
La pagina Web de "La Cueva TCG" es un e-commerce especializado en venta de productos de diversos Trading Card Games o TCGs.

El sitio cuenta con una barra de menú en la parte superior que lleva el nombre de la tienda y redirecciona al usuario al mismo home; botones que filtran el listado de materiales a partir de categorias y un link al carrito de compras.

En el home de la pagina se encuentra una lista de todos los items disponibles en la pagina sin filtrar. Los productos se disponen en 3 columnas y permiten al usuario visualizar una imagen referencial del item junto al nombre del producto, su precio unitario y un botón que nos permite ir al detalle del mismo.

En el detalle de los productos, tenemos acceso a la imagen del item junto a su nombre, un texto con más detalle sobre el mismo, el precio unitario y el stock disponible actualmente, que se actualiza conforme a la generación de nuevos documentos.

En esta misma sección, se puede seleccionar la cantidad de materiales a solicitar con un limite acorde al stock actual del producto. Si el producto no tiene stock, se informará en pantalla y no se permitirá agregar el mismo al carrito.

En la pagina del carrito de compras se podrá visualizar el detalle de los materiales elegidos. Este detalle incluye una miniatura de la imagen, el nombre del item, la cantidad solicitada y su precio unitario.

Debajo del listado de materiales, se visualiza un valor total del carrito que incluye la suma de los totales parciales por material (precio unitario x cantidad solicitada de cada item).

En caso de no querer continuar con la compra, tanto el carrito como los items de forma individual tienen un botón para eliminar los mismos. En caso de que el carrito esté vacío, se visualiza un botón que te redirecciona al home nuevamente.

Para proceder con la compra, el botón **Finalizar Compra** en el carrito redirecciona al usuario a un formulario que pide la siguiente información de forma obligatoria:

- Nombre
- Email
- Telefono

Una vez completado el formulario, la pagina indica al usuario que el proceso ha finalizado y muestra el id de la orden generada.