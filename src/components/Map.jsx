import { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IpContext } from "../contexts/IPContext";
import CustomMarker from "./CustomMarker";

const Map = () => {
  const {position} = useContext(IpContext)

  return (
    <section>
      <div className="leaflet-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CustomMarker position={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
