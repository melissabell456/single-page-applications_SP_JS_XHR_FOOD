"use strict";

let foodProd = require("./food");

let petFoodContainer = document.getElementById("petFoodContainer");


function printToDom (arrayOfProds) {
    arrayOfProds.forEach( (item) => {
        let brandContainer = document.createElement("div");
        brandContainer.setAttribute("class", "productBrand");
        brandContainer.innerHTML += `<h2>${item.name}</h2>`;
        if (item.breeds !== undefined) {
            brandContainer.innerHTML += `<h3>Suitable for ${item.breeds}</h3>`;
        }
        item.types.forEach( (types) => {
            let typeContainer = document.createElement("div");
            typeContainer.setAttribute("class", "typeOfFood");
            typeContainer.innerHTML += `<h3>${types.type}</h3> <h4>Available Sizes</h4>`;
            brandContainer.appendChild(typeContainer);
            types.volumes.forEach( (vol) => {
                typeContainer.innerHTML += `<p>${vol.name}: ${vol.price}</p>`;
            });
        });
        petFoodContainer.appendChild(brandContainer);
    });
}

foodProd.getDogFoodData(printToDom);
foodProd.getCatFoodData(printToDom);