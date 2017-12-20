// this module will encompass XHR for food data. 
"use strict";

// display brands, display types, display types price & size

let getDogFoodData = function(callbackToPrintToDom) {
    let dogFoodReq = new XMLHttpRequest();
    dogFoodReq.addEventListener("load", function() {
        let dogProds = JSON.parse(dogFoodReq.responseText).dog_brands;
        callbackToPrintToDom(dogProds);
    });
    dogFoodReq.addEventListener("error", function() {
        console.log("no luck");
        alert("unable to load data");
    });
    dogFoodReq.open("GET", "JSON/dogFood.json");
    dogFoodReq.send();
};

let getCatFoodData = function(callbackToPrintToDom) {
    let catFoodReq = new XMLHttpRequest();
    catFoodReq.addEventListener("load", function() {
        let catProds = JSON.parse(catFoodReq.responseText).cat_brands;
        callbackToPrintToDom(catProds);
    });
    catFoodReq.addEventListener("error", function() {
        console.log("no luck");
        alert("unable to load data");
    });
    catFoodReq.open("GET", "JSON/catFood.json");
    catFoodReq.send();
};




module.exports = {getDogFoodData, getCatFoodData};