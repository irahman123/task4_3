const wBody = document.querySelector("#weather-table > tbody");

function loadWeathe(){
    const request = new XMLHttpRequest();

    request.open("GET", "Access-Control-Allow-Origin: http://localhost:8000/api/weather", true);
    request.onload = function(){
        const json = JSON.parse(request.responseText);
        console.log(json);
    };
    request.send();
};

//document.addEventListener("DOMContentLoaded", () => {loadWeathe(); });