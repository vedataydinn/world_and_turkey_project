import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface TurkeyMapProps {
  data: any; // We'll define proper types later
}

const TurkeyMap: React.FC<TurkeyMapProps> = ({ data }) => {
  return (
    <div className="map-container">
      <MapContainer
        center={[39.9334, 32.8597]} // Centered on Ankara
        zoom={6}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default TurkeyMap;
