import React from 'react';
import { directive } from '@babel/types';

const foot = {
  backgroundColor:'#21304a',
  height:'80px',
  color: '#2fc3b6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0'
}

function Navbar(props) {
  
  return(
    <div style={foot}>
      <p>Ammper</p>
    </div>
  ) 
};

export default Navbar