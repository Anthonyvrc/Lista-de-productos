



console.log("soy un script extern productos ")
// Este elemento siempre regresa un array, la primer posicion del main de un array de 1x1
const main = document.getElementsByTagName("main").item(0)
// ==================================
const URLMain = "https://fakestoreapi.com/products/"
// const URLMain= null
const mainProds= document.getElementById("mainProds");

const ulMenu= document.getElementById("ulMenu");





function getData(cat){
    const options= {"method":"GET"}; 
    
    fetch(URLMain+cat, options)
        .then((response) => {
            console.log(response);
            response.json().then((res) => {
                // console.log(res.length);
                // console.log(res[0].title);
                createCards(res);
                

            });
        })

        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
            ${err.message}
        </div>`);
        });
}//getData

getData("");

function getCategories(){
    const options= {"method":"GET"}; 
    fetch(URLMain+"categories/", options)
        .then((response) => {
            // console.log(response);
            response.json().then((res) => {
                console.log("categories: ",res);
                res.forEach(cat => {
                    ulMenu.insertAdjacentHTML("afterbegin",
                    `<li><a class="dropdown-item" style="cursor:pointer;" onclick="getData('category/${escape(cat)}')">${cat}</a></li> `
                )});
            });
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
            ${err.message}
        </div>`);
        });
}//getCategories
getCategories();


function createCards(prods) {
    mainProds.innerHTML="";
    //tooman 20 productos y los mandes a imprimir en tu main
    //puedo imprimir uno y despues mandar los demas y adjacentHTML
    // for (//inicio//condicion//contador)

    // console.log("jelo")
    for (let i = 0; i < prods.length; i++) {
        // main.insertAdjacentHTML("beforeend", `<p>Hello</p>`)
        console.log(prods[i].title)

        const modalId = `ExampleModal-${i}`; 
        
        console.log(prods[i].image)
        mainProds.insertAdjacentHTML("beforeend",

            `
        <div class="card" style="width: 18rem;">
        <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}" style="height:300px; object-fit:contain;">
        <div class="card-body">
        <h5 class="card-title">${prods[i].title}</h5>
        <p class="card-text">${prods[i].description.slice(0, 50)} y el precio es $ ${prods[i].price}</p>
        <a href="#" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#${modalId}">Abrir Modal (Saber mas del producto)</a>
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalTitle-${i}">${prods[i].title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${prods[i].description} <b><br>Precio==$${prods[i].price}</b>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Comprarlo $_$</button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        `)

        // console.log(prods[i].title)
    }}
