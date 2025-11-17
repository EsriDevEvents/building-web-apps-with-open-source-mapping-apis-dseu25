import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { BasemapStyle } from "@esri/maplibre-arcgis";

import { ARCGIS_APIKEY } from "./config.js";

const map = new maplibregl.Map({ 
  container: "map",
  center: [8.6501, 50.1127], 
  zoom: 15
});
BasemapStyle.applyStyle(map, { 
  style: "arcgis/outdoor", 
  token: ARCGIS_APIKEY
});
