let twoItems = document.querySelector(".twoItemsBtn");
let itemsConainer = document.querySelector(".items");
let oneItem = document.querySelectorAll(".item");

twoItems.addEventListener("click", showTwoItemsFunc);

function showTwoItemsFunc(){
    itemsConainer.className = "twoItems";

    for(const item of oneItem){
        item.className = "oneItem";

    }
   
}



let sixItems = document.querySelector(".sixItemsBtn");


sixItems.addEventListener("click", showSixItemsFunc);

function showSixItemsFunc(){
    itemsConainer.className = "sixItems";

    for(const item of oneItem){
        item.className = "oneItem";

    }
   
}