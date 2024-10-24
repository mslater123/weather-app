import React, { useState } from 'react';
import { GoogleMap, StreetViewPanorama } from '@react-google-maps/api';
import './StreetViewPanorama.css';

const containerStyle = {
  width: '100%',
  height: '300px'
};

function StreetViewPanoramaComponent({ latitude, longitude }) {
  const [hasStreetView, setHasStreetView] = useState(true);

  const center = {
    lat: latitude,
    lng: longitude
  };

  const onLoadStreetView = (streetViewService) => {
    streetViewService.getPanorama({
      location: center,
      radius: 50
    }, (data, status) => {
      if (status === 'OK') {
        setHasStreetView(true);
      } else {
        setHasStreetView(false);
      }
    });
  };

  if (!hasStreetView) {
    return (
      <div className="street-view-panorama">
        <h3>Street View</h3>
        <p>No Street View available for this location.</p>
      </div>
    );
  }

  return (
    <div className="street-view-panorama">
      <h3>Street View</h3>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <StreetViewPanorama
          position={center}
          visible={true}
          onLoad={onLoadStreetView}
        />
      </GoogleMap>
    </div>
  );
}

export default StreetViewPanoramaComponent;
