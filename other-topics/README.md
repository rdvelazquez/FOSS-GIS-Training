- MongoDB
  - Good quick ref for the shell: https://docs.mongodb.com/manual/reference/mongo-shell/
  - Nice overview (uses pyMongo): https://www.baeldung.com/mongodb-geospatial-support
  - Queries: https://docs.mongodb.com/manual/geospatial-queries/
  - Indexing: https://www.youtube.com/watch?v=iGnSNfzaLf4
- MapBox[GL|JS]
  - Most up to date docs/ref: https://docs.mapbox.com/mapbox-gl-js/api/
  - Older (version used in many of our apps) docs/ref: https://docs.mapbox.com/mapbox.js/api/v3.2.0/?utm_medium=sem&utm_source=google&utm_campaign=sem%7Cgoogle%7Cbrand%7Cchko-googlesearch-pr01-dynamicsearchcampaign-nb.broad-all-landingpage-search&utm_term=brand&utm_content=chko-googlesearch-pr01-dynamicsearchcampaign-nb.broad-all-landingpage-search&gclid=Cj0KCQjw3uboBRDCARIsAO2XcYDHP1OEc2eIT1Cw_vb02MdDd7ZALcuDpqhzITTJxYsSbNxJxvXylX0aAl3SEALw_wcB
- Turf (javascript equivalent of shapely):
  - They have nice underscore_esk type of docs: http://turfjs.org/docs/
  - Works in a JS jupyter notebook (see `turfExample` notebook); one thing to remember is that, like all javascript jupyter notebooks, you have to install the package in the same directory as the notebook (i.e. `npm install turf` from the dir instead of `npm install -g turf`)