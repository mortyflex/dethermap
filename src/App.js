import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import './App.css';
import socketIOClient from 'socket.io-client';


export default class App extends Component {

  constructor(){
    super();

    this.state = {
      endpoint:"http://192.168.1.69:8080",
      counter:0,
      message:'',
      lat: 25.166667,
      lng: 2.333333
    };

    this.onInit = this.onInit.bind(this);
  }

  onInit(data){
    console.log("this is the data from server", data);
  }

  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on('init', this.onInit);
  }


  render() {

      const MapDether = withScriptjs(withGoogleMap(props =>

            <GoogleMap
                defaultZoom={2}
                defaultCenter={{ lat: 25.166667, lng: 2.333333 }}
                options={{
                  streetViewControl: false,
                  mapTypeControl:false,
                  zoomControl: false,
                  panControl: false,
                  scaleControl: false,
                  fullscreenControl: false
                }}
            >
            <Marker
              position={{ lat: this.state.lat, lng: this.state.lng}}
            />

            </GoogleMap>

        ));

    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Dether Map</h1>
        </header>

        <MapDether
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgm0-fPyDUd1ap9ODcJOwc7AIQeVldqdI&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `500px` }} />}
            containerElement={<div style={{ height: `500px`, border:'2px solid #686de0' }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

      </div>
    );
  }
}
