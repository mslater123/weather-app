// weather/src/components/StreetViewImage.jsx
import process from
import React, { useState } from 'react';
import './StreetViewImage.css'; // Import corresponding CSS

function StreetViewImage({ latitude, longitude, isLoading }) {
  const API_KEY = process.env.REACT_APP_GOOGLE_STREET_VIEW_API_KEY;
  const [hasError, setHasError] = useState(false);
  const placeholderUrl = 'https://via.placeholder.com/400x300.png?text=No+Image+Available';

  // Construct the Street View Static API URL
  const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=400x300&location=${latitude},${longitude}&fov=80&heading=70&pitch=0&key=${API_KEY}`;

  // Handle image loading errors
  const handleError = () => {
    setHasError(true);
  };

  if (isLoading) {
    return (
      <div className="street-view-image">
        <h3>Location Image</h3>
        <div className="spinner"></div> {/* CSS Spinner */}
      </div>
    );
  }

  return (
    <div className="street-view-image">
      <h3>Location Image</h3>
      {hasError ? (
        <div>
          <img src={placeholderUrl} alt="No Street View Available" />
          <p>No Street View available for this location.</p>
        </div>
      ) : (
        <img src={streetViewUrl} alt="Street View" onError={handleError} />
      )}
    </div>
  );
}

export default StreetViewImage;