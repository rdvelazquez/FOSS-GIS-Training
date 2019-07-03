addEventListener("load", function(){
  var mymap = L.map('mapid').setView([39.9523, -75.1638], 15);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmR2ZWxhenF1ZXoiLCJhIjoiY2p4bjc5cmhyMGJuZTNibGltd2c1eHQwYSJ9.HkwB3inNZNZcgNUOPSa58w'
    }).addTo(mymap);
})
