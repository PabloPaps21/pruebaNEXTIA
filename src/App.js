import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import mapboxgl from 'mapbox-gl';

const NODES = 'http://ammper.herokuapp.com/d_nodes';
const PML = 'https://ammper.herokuapp.com/d_node_pmls';

const maxValue = 14;
const localData = [
      { STATE_ID: '01', unemployment: 13.17 },
      { STATE_ID: '02', unemployment: 9.5 },
      { STATE_ID: '04', unemployment: 12.15 },
      { STATE_ID: '05', unemployment: 8.99 },
      { STATE_ID: '06', unemployment: 11.83 },
      { STATE_ID: '08', unemployment: 7.52 },
      { STATE_ID: '09', unemployment: 6.44 },
      { STATE_ID: '10', unemployment: 5.17 },
      { STATE_ID: '12', unemployment: 9.67 },
      { STATE_ID: '13', unemployment: 10.64 },
      { STATE_ID: '15', unemployment: 12.38 },
      { STATE_ID: '16', unemployment: 10.13 },
      { STATE_ID: '17', unemployment: 9.58 },
      { STATE_ID: '18', unemployment: 10.63 },
      { STATE_ID: '19', unemployment: 8.09 },
      { STATE_ID: '20', unemployment: 5.93 },
      { STATE_ID: '21', unemployment: 9.86 },
      { STATE_ID: '22', unemployment: 9.81 },
      { STATE_ID: '23', unemployment: 7.82 },
      { STATE_ID: '24', unemployment: 8.35 },
      { STATE_ID: '25', unemployment: 9.1 },
      { STATE_ID: '26', unemployment: 10.69 },
      { STATE_ID: '27', unemployment: 11.53 },
      { STATE_ID: '28', unemployment: 9.29 },
      { STATE_ID: '29', unemployment: 9.94 },
      { STATE_ID: '30', unemployment: 9.29 },
      { STATE_ID: '31', unemployment: 5.45 },
      { STATE_ID: '32', unemployment: 4.21 },
      { STATE_ID: '33', unemployment: 4.27 },
      { STATE_ID: '34', unemployment: 4.09 },
      { STATE_ID: '35', unemployment: 7.83 },
      { STATE_ID: '36', unemployment: 8.01 },
      { STATE_ID: '37', unemployment: 9.34 },
      { STATE_ID: '38', unemployment: 11.23 },
      { STATE_ID: '39', unemployment: 7.08 },
      { STATE_ID: '40', unemployment: 11.22 },
      { STATE_ID: '41', unemployment: 6.2 },
      { STATE_ID: '42', unemployment: 9.11 },
      { STATE_ID: '44', unemployment: 10.42 },
      { STATE_ID: '45', unemployment: 8.89 },
      { STATE_ID: '46', unemployment: 11.03 },
      { STATE_ID: '47', unemployment: 7.35 },
      { STATE_ID: '48', unemployment: 8.92 },
      { STATE_ID: '49', unemployment: 7.65 },
      { STATE_ID: '50', unemployment: 8.01 },
      { STATE_ID: '51', unemployment: 7.62 },
      { STATE_ID: '53', unemployment: 7.77 },
      { STATE_ID: '54', unemployment: 8.49 },
      { STATE_ID: '55', unemployment: 9.42 },
      { STATE_ID: '56', unemployment: 7.59 }
    ];



mapboxgl.accessToken = 'pk.eyJ1IjoicGFibG9wZXJhbHRhMjEiLCJhIjoiY2s2ODR2MWJyMDFhdzNrcW0xMGJnZDcwdiJ9.qhepjF1bepRFlqlZOE6oVQ';






export default class App extends Component{
  state = {
    nodes: [],
    pml: []
  }
  constructor(props) {
      super(props);
      this.state = {
      lng: -105,
      lat: 24,
      zoom: 4.5
    };
  }
  
  async componentDidMount() {
      const { data } = await axios.get(NODES)
      //this.setState( { nodes: [...data] })
      console.log( data )

      const { dataPml } = await axios.get(PML)
      console.log( dataPml )
 
    const map = await new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/pabloperalta21/ck68brm3v162m1io2hcji11tt',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }  

  render() {
    const { nodes } = this.state;
    return (
        <div>
          <div ref={el => this.mapContainer = el} className='map' />
            <div className='sidebarStyle'>
              <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div>
          </div>   
    )
  }
}
