const URLMain = "https://fakestoreapi.com/products";
const divProductos = document.getElementById("productos");

fetch(URLMain)
    .then(res => res.json())
    .then(productos => {
        productos.forEach(producto => {
            divProductos.innerHTML += `
                <div class="producto">
                    <h3>${producto.title}</h3>
                    <img src="${producto.image}" alt="${producto.title}">
                    <p>Precio: $${producto.price}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        divProductos.innerHTML = `<p>Error al cargar los productos: ${error}</p>`;
    });
