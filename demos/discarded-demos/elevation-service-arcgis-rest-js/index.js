import { ARCGIS_APIKEY } from "./config.js";

// npm i @esri/arcgis-rest-elevation @esri/arcgis-rest-request --save
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { findElevationAtPoint } from "@esri/arcgis-rest-elevation";
findElevationAtPoint({
  lon: -11.7,
  lat: 12.3,
  relativeTo: "ellipsoid",
  authentication: ApiKeyManager.fromKey("ARCGIS_APIKEY")
})
.then((response) => {
  console.log(response);
});
