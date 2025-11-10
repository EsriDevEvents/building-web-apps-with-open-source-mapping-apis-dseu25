import { ARCGIS_APIKEY } from "./config.js";

// npm i @esri/arcgis-rest-routing @esri/arcgis-rest-request --save
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { solveRoute } from "@esri/arcgis-rest-routing";
solveRoute({
  stops: [
    [-117.195677, 34.056383],
    [-117.918976, 33.812092]
  ],
  authentication: ApiKeyManager.fromKey(ARCGIS_APIKEY);,
}).then(response =>
  console.log(response.routes)
);