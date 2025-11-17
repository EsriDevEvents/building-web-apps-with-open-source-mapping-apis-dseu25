import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { vectorBasemapLayer } from 'esri-leaflet-vector';
import { ARCGIS_APIKEY } from "./config.js";

const token = ARCGIS_APIKEY
const map = L.map("map").setView([50.1127, 8.6501], 15);
vectorBasemapLayer("arcgis/outdoor", { token }).addTo(map);