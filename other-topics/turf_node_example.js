const turf = require('turf')


const exampleGeoJSONPolygon = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
          [100.0, 1.0], [100.0, 0.0]
        ]
      ]
    },
    "properties": {
      "prop0": "value0",
      "prop1": { "this": "that" }
    }
}

var area = turf.area(exampleGeoJSONPolygon)
console.log('area: ', area)