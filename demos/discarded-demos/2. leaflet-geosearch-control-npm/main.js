import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { vectorBasemapLayer } from 'esri-leaflet-vector';
import 'esri-leaflet-geocoder';
import { geosearch, arcgisOnlineProvider } from "esri-leaflet-geocoder";
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

import { ARCGIS_APIKEY } from "./config.js";
const apiKey = ARCGIS_APIKEY

// npm i esri-leaflet-geocoder --save
const map = L.map("map").setView([50.1127, 8.6501], 15);
const basemapEnum = "arcgis/outdoor";
vectorBasemapLayer(basemapEnum, { token: apiKey }).addTo(map);
const searchControl = geosearch({
  providers: [arcgisOnlineProvider({ apiKey })]
}).addTo(map);