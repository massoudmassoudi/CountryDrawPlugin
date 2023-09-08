import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "./App.css";
import "leaflet/dist/leaflet.css";

export default function App() {
  const featureGroupRef = useRef();

  const [drawnLayers, setDrawnLayers] = useState([]);

  // setting the drawn layer data 
  const onCreated = (e) => {
    setDrawnLayers([...drawnLayers, e.layer]);
  };

  // on click of exportGeo button , executing the below function
  const exportGeoJSON = () => {
    const geoJSONData = {
      type: "FeatureCollection",
      features: drawnLayers.map((layer) => layer.toGeoJSON()),
    };

    const geoJSONString = JSON.stringify(geoJSONData, null, 2);

  
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      geoJSONString
    )}`;

    // Download the GeoJSON with the help of hyperlink tag
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = "shapeData.geojson";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="map-container">
      <MapContainer center={[21.5937, 80.9629]} zoom={4}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup ref={featureGroupRef}>
          <EditControl position="bottomright"  onCreated={onCreated} />
        </FeatureGroup>
      </MapContainer>

      <button className="export-button" onClick={exportGeoJSON}>
        Export to GeoJSON
      </button>
 </div>
);
}