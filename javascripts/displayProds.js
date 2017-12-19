"use strict";

let foodProd = require("./food");

let dogFoodContainer = document.getElementById("dogFoodContainer");


function printToDom (arrayOfProds) {
    arrayOfProds.forEach( (item) => {
        let brandContainer = document.createElement("div");
        brandContainer.setAttribute("class", "productBrand");
        brandContainer.innerHTML += `<h2>${item.name}</h2>`;
        item.types.forEach( (types) => {
            brandContainer.innerHTML += `<h3>${types.type}</h3>`;
            brandContainer.innerHTML += "<h4>Available Sizes</h4>";
            types.volumes.forEach( (vol) => {
                brandContainer.innerHTML += `<p>${vol.name}: ${vol.price}</p>`;
            });
        });
        dogFoodContainer.appendChild(brandContainer);
    });
}

foodProd(printToDom);