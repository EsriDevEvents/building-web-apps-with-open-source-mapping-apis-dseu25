import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import { vectorBasemapLayer } from 'esri-leaflet-vector';
import 'esri-leaflet-geocoder';
import { geosearch, arcgisOnlineProvider } from "esri-leaflet-geocoder"
    // <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@3.1.6/dist/esri-leaflet-geocoder.css">
;

import { ARCGIS_APIKEY } from "./config.js";
const apiKey = ARCGIS_APIKEY


const basemapEnum = "arcgis/outdoor";
const map = L.map("map").setView([50.1127, 8.6501], 15);
vectorBasemapLayer(basemapEnum, { token: apiKey }).addTo(map);

const searchControl = geosearch({
  // placeholder: "Enter an address or place e.g. 1 York St",
  providers: [arcgisOnlineProvider({ apiKey })]
}).addTo(map);