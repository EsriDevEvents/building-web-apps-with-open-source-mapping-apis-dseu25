# Data Preparation for Maplibre Vector Tile Extrusion Demo

## Step 1: Downloading OSM data

I used Overpass QL to extract OSM data

<details>
  <summary>Overpass QL to extract building footprints</summary>

```
[out:json][timeout:25];

// Define Manhattan as area
area["name"="Manhattan"]["boundary"="administrative"]->.searchArea;

// Search for buildings in the current view
(
  way["building"]({{bbox}});
  relation["building"]({{bbox}});
);

// Output only geometry and height
out body;
>;
out skel qt;
```

</details>

## Step 2: Cleaning up OSM data

Using:

* Remove unnecesary geometries https://mapshaper.org/ (polygons and polylines)
* Remove fields expect building and height geojson_property_editor.html

## Step 3: Publish vector tile service

1. Upload the layers to ArcGIS Online 
1. Style 
1. Publish a VTL
1. Configure attributes in the vector tile service