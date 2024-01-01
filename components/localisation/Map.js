
import React from "react";
import "./Map.css"
import GoogleMapReact from 'google-map-react';
import LocationPin from "./LocationPin";
const location = { address:'omar khayem morneg',lat: 36.6842219616728, lng:10.299154};
  
export default function Maps( {location, zoomLevel }) {
  

  return (
    <div style={{height: "100vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key:''}}

        //process.env.REACT_APP_APIKEY}

        defaultCenter={location}
        defaultZoom={9}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  )
}





