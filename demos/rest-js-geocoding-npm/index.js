import { ARCGIS_APIKEY } from "./config.js";

// npm i @esri/arcgis-rest-geocoding @esri/arcgis-rest-request --save
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { geocode } from "@esri/arcgis-rest-geocoding";
const authentication = ApiKeyManager.fromKey(ARCGIS_APIKEY);
geocode({
  address: "1600 Pennsylvania Ave",
  postal: "20500",
  countryCode: "USA",
  authentication
}).then((response) => {
  console.log("Candidates:", response.candidates);
});