import React,{useState} from "react"

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Police from "./img/police.jpg"
import GoogleMapReact from 'google-map-react';
export default function PoliceStations(){

const [pins,setpins] = useState([{lat:28.563365,lang:77.105979},{lat:28.586936,lang:77.220741}])
const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 28.644800,
    longitude: 77.216721,
    zoom: 15,


  });

  const AnyReactComponent = ({ text }) => {return <img src={Police} style={{width:"10px",height:"10px"}}/>} ;


function showpins(){
    return(
        pins.map((p)=>{
            return(
               
              <Marker latitude={p.lat} longitude={p.lang} offsetLeft={-(viewport.zoom * 3.5)} offsetTop={-(viewport.zoom * 7)}>

            <img style={{width:"450px",height:"450px"}} src={Police}/>
            </Marker>
            )
        })
    )
    
}

const defaultProps = {
  center: {
    lat: 28.644800,
    lng: 77.01502627
  },
  zoom: 11
};


console.log(viewport)

    return(
        <div style={{ height: '100vh', width: '100%' }}>
        <ReactMapGL
        {...viewport}
        mapboxAccessToken={"pk.eyJ1IjoiZGFya3NpZGVyNTEiLCJhIjoiY2wwZHl6NXY4MGR2NzNjbXo5ZTBtZGE4eSJ9._xuts111DHQXPl5CflCMiQ"}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        // mapboxApiAccessToken="pk.eyJ1IjoiZGFya3NpZGVyNTEiLCJhIjoiY2w3OW90Z2Q5MGxxYzN2b2w1bHcwcXcycSJ9.Om6m9gN7fe0c9xrNS6HAcg"
        mapStyle="mapbox://styles/darksider51/ckpijb0qi1unb17rtosxrlaz7"
        

      >
     {showpins()}
      </ReactMapGL>

      {/* <GoogleMapReact
       defaultCenter={defaultProps.center}
       defaultZoom={defaultProps.zoom}
      >
        {showpins()}
        </ GoogleMapReact> */}


        </div>
        
    )
}