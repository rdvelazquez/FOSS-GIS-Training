addEventListener("load", function(){
  var mymap = L.map('mapid').setView([39.9523, -75.1638], 12);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmR2ZWxhenF1ZXoiLCJhIjoiY2p4bjc5cmhyMGJuZTNibGltd2c1eHQwYSJ9.HkwB3inNZNZcgNUOPSa58w'
    }).addTo(mymap);

    function bloodLevelsStyle(feature) {
      const percentFivePlus = feature['properties']['perc_5plus']
      const fillOpacity = percentFivePlus/10
      var color = 'lightBlue'
      if (percentFivePlus > 3 ) {
        color = 'blue'
      } if (percentFivePlus > 5 ) {
        color = 'purple'
      } if (percentFivePlus > 10 ){
        color = 'red'
      }
      
      return {
        fillColor: color,
        fillOpacity: fillOpacity,
        color: 'blue',
        weight: 2,
      };
    }

  var geojsonLayer = L.geoJSON(bloodLevels, {
    style:bloodLevelsStyle
  });


  geojsonLayer.addTo(mymap);
})
