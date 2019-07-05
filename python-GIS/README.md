# Python for GIS

__https://automating-gis-processes.github.io/CSC18/index.html__

Dependencies / packages used:
```
# Install numpy (v 1.13.1)
conda install numpy

# Install pandas (v 0.20.3) --> bundled with python-dateutil (v 2.6.1) and pytz (v 2017.2)
conda install pandas

# Install scipy (v 0.19.1)
conda install scipy

# Install matplotlib (v 2.0.2) --> bundled with cycler, freetype, icu, jpeg, libpng, pyqt, qt, sip, sqlite, tornado, zlib
conda install matplotlib

# Install scikit-learn (v 0.19.0)
conda install scikit-learn

# Install networkx (v 1.11) --> bundled with decorator (v 4.1.2)
conda install networkx

# Install bokeh (v 0.12.9) --> bundled with jinja2, markupsafe, pyyaml, yaml -packages
conda install bokeh

# Install statsmodels (v 0.8.0) --> bundled with patsy (0.4.1)
conda install statsmodels

# Install PySpark (v 2.2.0) --> bundled with py4j (v 0.10.6)
conda install pyspark

# Install Geopandas (v 0.3.0) --> bundled with click, click-plugins, cligj, curl, descartes, expat, fiona, freexl, gdal, geos, hdf4, hdf5, kealib, krb5, libiconv, libnetcdf, libpq, libspatialindex, libspatialite, libtiff, libxml2, munch, openjpeg, pcre, proj4, psycopg2, pyproj, pysal, rtree, shapely, sqlalchemy, xerces-c
conda install -c conda-forge geopandas

# Install cartopy (v 0.15.1) --> bundled with libxslt, lxml, olefile, owslib, pillow, pyepsg, pyshp
conda install -c conda-forge cartopy

# Install geoplot (v 0.0.4) using pip (on Linux: be sure to use pip that comes with conda distribution!) --> bundled with seaborn
pip install geoplot

# Install osmnx (v 0.5.4) --> bundled with altair, bleach, branca, colorama, entrypoints, folium, geopy, html5lib, ipykernel, ipython, ipython_genutils, jedi, jsonschema, jupyter_client, jupyter_core, mistune, nbconvert, nbformat, notebook, pandoc, pandocfilters, pickleshare, prompt_toolkit, pygments, pyzmq, simplegeneric, testpath, traitlets, vega, vincent, wcwidth, webencodings
conda install -c conda-forge osmnx

# Install Folium (v 0.5.0) --> bundled with altair, vega
conda install -c conda-forge folium

# Install Dash using Pip
pip install dash==0.19.0  # The core dash backend
pip install dash-renderer==0.11.1  # The dash front-end
pip install dash-html-components==0.8.0  # HTML components
pip install dash-core-components==0.14.0  # Supercharged components
pip install plotly --upgrade  # Plotly graphing library
```

## 1. Introduction to python GIS

Shapely is a Python package for working with planar data primitives; based on GEOS. Shapely can be used from within jupyter notebook (see the `Exercise 1` notebook)

## 2. GeoPandas and Map Projections
geopandas install: be aware of which conda channel packages are coming from and be consistent. I was getting the following error because some packages were from conda-forge and some were from the main conda channel:
```
ImportError: dlopen(/anaconda3/lib/python3.7/site-packages/fiona/ogrext.cpython-37m-darwin.so, 2): Library not loaded: @rpath/libgif.7.dylib
  Referenced from: /anaconda3/lib/libgdal.20.dylib
  Reason: image not found
```
I saved the working conda environment to `environment.yml`
See the `Exercise 2` notebook for basic geopadas usage.

## 3. GeoPandas, geocoding, OpenStreeMap data and data reclassification
- Geocoding: converting addresses into coordinates or vice versa (in python you can use a package called (geopy)[https://geopy.readthedocs.io/en/1.11.0/]
- Basic pandas but good to remember... `.merge()` joins by key, `.join()` joins by index.
- (osmnx)[https://github.com/gboeing/osmnx] is a python module for working with street networks from open street maps
- see `Exercise 3`
  

## 4. Analyses (within, intersect, touch, nearest neighbour, etc)
- Within, intersect and touch can be done in both shapely or in geopandas:
- see problem 3 of `Exercise 3` for an example of finding overlapping polygons
- 