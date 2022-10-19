import { icon } from "leaflet";
import React from "react";
import { useContext } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import locationIcon from "../assets/icon-location.svg";
import { IpContext } from "../contexts/IPContext";

const CustomMarker = () => {
  const {position} = useContext(IpContext)
  
  const marker = icon({
    iconUrl: locationIcon,
    iconSize: [46, 56],
  });
  const map = useMapEvents({});
  map.flyTo(position, map.getZoom())
  return position === null ? null : (<Marker position={position} icon={marker}></Marker>);
};

export default CustomMarker;
