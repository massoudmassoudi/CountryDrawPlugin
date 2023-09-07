import "./styles.css";
import "leaflet/dist/leaflet.css";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import {EditControl} from "react-leaflet-draw"
import "leaflet-draw/dist/leaflet.draw.css"



export default function App() {
  return (
    <MapContainer center={[21.5937, 80.9629]} zoom={5}>
      {/* OPEN STREET MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup>
        <EditControl  position="bottomright"/>
      </FeatureGroup>

    </MapContainer>
  );
}

