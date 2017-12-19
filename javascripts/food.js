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




module.exports = getDogFoodData;