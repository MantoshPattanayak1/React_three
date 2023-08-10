import React, { useState } from 'react';


import { LuLayoutDashboard } from "react-icons/lu";
import { HiMiniBellAlert } from "react-icons/hi2";
import {MdLiveTv} from "react-icons/md";
import {MdImageSearch} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {FaBars} from "react-icons/fa";
import { RiFileHistoryFill} from "react-icons/ri";
import { GrHostMaintenance } from "react-icons/gr";
import {FiLogOut} from "react-icons/fi"
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<LuLayoutDashboard/>
        },
        {
            path:"/Alerts",
            name:"Alerts",
            icon:<HiMiniBellAlert/>
        },
        {
            path:"/Live",
            name:"Live",
            icon:<MdLiveTv/>
        },
        {
            path:"/Search",
            name:"Search",
            icon:<MdImageSearch/>
        },
        {
            path:"/Zone",
            name:"Zone",
            icon:<FaLocationDot/>
        },
        {
            path:"/Logs",
            name:"Logs",
            icon:<RiFileHistoryFill/>
        },
         {
            path:"/Maintain",
            name:"Maintainence",
            icon:<GrHostMaintenance />
        },
        {
            path:"/LogOut",
            name:"LogOut",
            icon:<FiLogOut/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">SOUL</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;