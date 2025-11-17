// import 'ol';
import 'ol/ol.css';
import * as ol from 'ol';

import { ARCGIS_APIKEY } from "./config.js";

const attribution = () => {
  const source = map.getLayers().item(0).getSource();
  const poweredByEsriString = "Powered by <a href='https://www.esri.com/en-us/home' target='_blank'>Esri</a> | ";
  
  const attributionFn = source.getAttributions();
  if (attributionFn) {
    source.setAttributions((ViewStateLayerStateExtent) => {
      return [poweredByEsriString, ...attributionFn(ViewStateLayerStateExtent)];
    });
  } else source.setAttributions(poweredByEsriString);
}

import { apply } from 'ol-mapbox-style';
const map = new ol.Map({ target: "map" });
map.setView(new ol.View());
const basemapId = "arcgis/outdoor";
const basemapURL = `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapId}?token=${ARCGIS_APIKEY}`;
apply(map, basemapURL).then(attribution);


// import { apply } from 'ol-mapbox-style';
// const map = new ol.Map({ target: "map" });
// map.setView(new ol.View());
// const basemapId = "arcgis/outdoor";
// const basemapURL = `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapId}?token=${ARCGIS_APIKEY}`;
// apply(map, basemapURL).then(() => {/* display attribution*/});