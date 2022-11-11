import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 10
  };

  let obj = {
    title: "",
    latitude: "",
    longitude: ""
  }

  const [ coordinates , setcoordinates] = useState([{}]);

  const NasaData = async()=>{
    const res = await axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=50&days=10");
    let temp = [];
    temp = [];
    for(let i =0 ;i<res.data.events.length;i++){
       temp.push({
        title: res.data.events[i].title,
        longitude: res.data.events[i].geometries[i].coordinates[0],
        latitude: res.data.events[i].geometries[i].coordinates[1]
       });
    }

    console.log(res.data);
    setcoordinates([{}]);
    setcoordinates(temp);
    temp=[];
} 

console.log("cgeck" , coordinates);
  useEffect(()=>{
      NasaData();
  },[]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      
      </GoogleMapReact>
    </div>
  );
}
