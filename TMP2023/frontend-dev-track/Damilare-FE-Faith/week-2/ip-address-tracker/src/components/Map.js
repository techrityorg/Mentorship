import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Icon from "./Icon";

const Map = ({lat, lng}) => {
    return (
      <MapContainer
        center={[lat,lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "500px",
          width: "100%",
          marginTop: "-60px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={Icon}
          position={[lat, lng]}
        >
          <Popup>
            Ip location <br /> double click to scrollWheelZoom
          </Popup>
        </Marker>
      </MapContainer>
    );
}

export default Map