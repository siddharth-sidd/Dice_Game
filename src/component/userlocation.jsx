// LocationTracking/UserLocationMap.js
/*
import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const UserLocationMap = () => {
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    // Fetch user's current location when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: userLocation.lat, lng: userLocation.lng }}
    >
      <Marker position={{ lat: userLocation.lat, lng: userLocation.lng }} />
    </GoogleMap>
  ));

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Map
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default UserLocationMap;

*/