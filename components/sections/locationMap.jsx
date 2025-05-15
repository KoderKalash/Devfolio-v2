'use client';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker image
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

export function LocationMap() {
  return (
    <div className="h-64 w-full rounded-lg overflow-hidden relative">
      <MapContainer
         center={[28.5355, 77.3910]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution=""
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {/* <Marker position={[28.5355, 77.3910]} /> */}
      </MapContainer>
    </div>
  );
}
