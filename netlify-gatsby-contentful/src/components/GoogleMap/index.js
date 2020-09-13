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
        lat: 23.73934,
        lng: 90.387038,
      }}
    >
      <Marker />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAsfb6LUFK6tTHnj3yHcxgi_vptjMHc9x0',
})(GoogleMap);
