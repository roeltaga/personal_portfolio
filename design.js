window.onload = function() {


let filters = document.getElementById("filters_button");

function roel() {
    filters.classList.toggle("filtersOpened");
    filters.classList.toggle("filtersClosed");
}

filters.addEventListener("click", roel);



let anyfilter = this.document.getElementsByClassName("filterFilter");

function changeState(i) {
    this.classList.toggle("filterIsOn");
    this.classList.toggle("filterIsOff");
}

for (i=0; i < anyfilter.length; i++) {
    anyfilter[i].addEventListener("click", changeState);
}







// document.getElementById("switch").checked












}