import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class NavBar extends Component {
  render() {
 
    return (
        
        <body>
        <nav class="navbar navbar-inverse navbar-expand-xl navbar-dark">
            <div class="navbar-header">
                <a class="navbar-brand" href="/"><i class="fa fa-cube"></i>MIS <b>SLIIT</b></a>  		
               
            </div>
           
            <div id="navbarCollapse" class="collapse navbar-collapse justify-content-end">		
             
                <ul class="nav navbar-nav ">
         
                    <li class="active"><a href="/"><i class="fa fa-home"></i><span>Home</span></a></li>&nbsp;
                    <li><a href="/"><i class="fa fa-gears"></i><span>Projects</span></a></li>
                    <li><a href="/"><i class="fa fa-users"></i><span>Team</span></a></li>
                    <li><a href="/"><i class="fa fa-pie-chart"></i><span>Reports</span></a></li>
                    <li><a href="/"><i class="fa fa-briefcase"></i><span>Careers</span></a></li>
                    <li><a href="/"><i class="fa fa-envelope"></i><span>Messages</span></a></li>	
                    &nbsp;	
                    {/* <li><a href={"/login"}><i class="fa fa-bell logout-btn"></i><span >Logout</span></a></li> */}
                   
                </ul>
            </div>
        </nav>
        </body>
    )
  }
}
