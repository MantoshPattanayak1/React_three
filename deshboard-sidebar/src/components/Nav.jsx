import React from 'react'
import {  MdGroups2 } from "react-icons/md";
import { FaDumpsterFire } from "react-icons/fa";
import { MdDangerous} from "react-icons/md";
import { FaTemperatureFull
} from "react-icons/fa6";
import { BiWater} from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function Nav() {
   
    const menuItem=[
        {
            path:"/Crowd",
            name:"Crowd_Alerts",
            icon:<MdGroups2/>
        },
        {
            path:"/Fire",
            name:"Fire and Smoke alerts",
            icon:<FaDumpsterFire/>
        },
        {
            path:"Wrong",
            name:"Wrong Parking",
            icon:<MdDangerous/>
        },
        {
            path:"/AirAlerts",
            name:"Air quality Alerts",
            icon:<FaTemperatureFull/>
        },
        {
            path:"/WaterAlerts",
            name:"Water quality Alerts",
            icon:<BiWater/>
        }
    ]
  return (
    <div>
        <h1 style={{margin:"8% 0% 10% 7%"}}>Alerts</h1>
    {
        
        menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{marginTop:"35%"}} >
                <div className="icon">{item.icon}</div>
                <div style={{display: "block"}} className="link_text">{item.name}</div>
            </NavLink>
        ))
    }
    </div>
  )
}

export default Nav