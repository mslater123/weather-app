import React from 'react';
import './CameraFeed.css';

function CameraFeed({ data, placeholderUrl }) {
  if (!data) {
    return (
      <div className="camera-feed">
        <h3>Nearby Camera</h3>
        <img src={placeholderUrl} alt="No Camera Available" />
      </div>
    );
  }

  return (
    <div className="camera-feed">
      <h3>Nearby Camera: {data.name}</h3>
      {data.url ? (
        <img src={data.url} alt={data.name} />
      ) : (
        <p>No image available for this camera.</p>
      )}
    </div>
  );
}

export default CameraFeed;