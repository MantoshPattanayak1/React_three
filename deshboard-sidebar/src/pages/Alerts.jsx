import React from 'react';
import Nav from '../components/Nav'
import CircularProgressBar from '../components/CircularProgressBar';
import BarChart from '../components/BarChart';




function Alerts() {
  return (
    <div className='Alerts' >
    <div className='above'>
      <div style={{margin:"2% 0% 2% 2%"}}><h1>Alerts</h1></div>
     
     <div className='above-two'>

     <select name="zone" id="zone" style={{borderRadius: "0.5rem", padding:"0.15rem"}}>
  <option value="">zone</option>
</select>


<select name="device_type" id="device-"  style={{borderRadius: "0.5rem",marginLeft:"0.4rem" , padding:"0.15rem"}}>
  <option value="">Device Type</option>
</select>

<select name="device_name" id="device-name"  style={{borderRadius: "0.5rem",marginLeft:"0.4rem", marginRight:"0.8rem" , padding:"0.15rem"}}>
  <option value="">Device Name</option>
</select>
     </div>
      
    

    </div>
    <div className="nav_one">
      <Nav></Nav>
    </div>



    <div className='main_one'>
    <div className='all_details'>
      <div><CircularProgressBar/></div>
    </div>
    <div className='zone_details' style={{padding:"0.5rem"}}>
    <h4 style={{ textAlign:'center', marginBottom:"1.2rem"}}>Zone Details</h4>
    <div>
      <h4 >Zone name :</h4>
      <h4>Latitude :</h4>
      <h4>Longitude :</h4>


    </div>


    </div>

    <div className='device_details'>
       <h4 style={{ textAlign:'center', marginBottom:"1.2rem"}}>Device Details</h4>
    <div>
      <h4 >Device name :</h4>
      <h4>Device Type :</h4>
      <h4>IP:</h4>
      <h4>MAC:</h4>


    </div>

    </div>
    </div>
   


    <div className='main_two'>

    </div>

    <div className='main_three'>
      {/* <BarChart></BarChart> */}
  </div>


    </div>
  );
}

export default Alerts;