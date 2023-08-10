import React from 'react';
import Parking from './Parking.jsx'
import Gr_locations from './Gr_Locations.jsx'
import Clip_Segment from './Clip_Segment.jsx'
function Live() {
  return (
    <div className='live'>
   
    <div className='grid-live'>
    
    <div className='head'><div className='headName'><h1>Live Video</h1></div> </div>
     <div className='parking'> <Parking/></div>
     <div className='grLocations'><Gr_locations/></div>
     <div className='clipsegment'><Clip_Segment/></div>
    
    </div>
 
    </div>
  );
}

export default Live;