import { ARCGIS_APIKEY } from "./config.js";

// npm i @esri/arcgis-rest-places @esri/arcgis-rest-request --save
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { findPlacesNearPoint } from "@esri/arcgis-rest-places";
findPlacesNearPoint({
  x: 8.6501,
  y: 50.1127,
  categoryIds: ["4d4b7105d754a06377d81259"], // Arts and Outdoors
  radius: 750,
  authentication: ApiKeyManager.fromKey(ARCGIS_APIKEY)
}).then((response) => {
  console.log("Search results:", response.results);
});
