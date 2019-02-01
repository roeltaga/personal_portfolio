window.onload = function() {



function readCookies() {     /* READ COOKEIS */
    cookiesString = document.cookie.split('; ');
    var result = {};
    for (var i = 0; i < cookiesString.length; i++) {
        var cur = cookiesString[i].split('=');
        result[cur[0]] = cur[1];
    }
    cookies = result;
}
readCookies();
console.log(cookies.filterLogo);
console.log(document.cookie);

if (cookies.filterLogo == 0) {
    document.getElementById("filterLogo").classList.remove("filterIsOn")
    document.getElementById("filterLogo").classList.add("filterIsOff")
}






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
    if (this.classList.contains("filterIsOn")) {
        document.cookie = "filterLogo=1; expires=Thu, 14 Feb 2019 20:47:11 UTC; path=/"
    }
    else { document.cookie = "filterLogo=0; expires=Thu, 14 Feb 2019 20:47:11 UTC; path=/"; }
}

for (i=0; i < anyfilter.length; i++) {
    anyfilter[i].addEventListener("click", changeState);
}







// document.getElementById("switch").checked












}