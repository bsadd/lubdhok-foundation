import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export const GoogleMap = props => {
  return (
    <Map
      google={props.google}
      containerStyle={{
        position: 'relative',
        width: '100%',
        height: '400px',
      }}
      zoom={15}
      initialCenter={{
        lat: 23.74195087942417,
        lng: 90.39520469042469
      }}
    >
      <Marker />, 
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAP_API,
})(GoogleMap);
