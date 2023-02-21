import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import "./admin.scss"
import Ourlogo from "../assets/gibmpcsl.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';
 //import InfoIcon from '@mui/icons-material/Info';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";



const Admin = () => {

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');

  const {currentUser, adminlogout } = useContext(AuthContext);

  return (
    <div className="adminwhole">
      <div className="left">
      <div className="top">
        <span>
        <img className="logo"  src={Ourlogo} alt="GIB HORIZONS"/> 
        </span> 
    </div>
    <hr />
    <div className="center">
        <ul>
            <li>
                <Link  className="link" to="/home">
                <DashboardIcon className="icon"/>
                <span>MY DASHBOARD</span>
                </Link>
            </li>
            <li>
            <Link className="link" to="/users">
                <ContactPageIcon className="icon"/>
                <span>VIEW USERS</span> 
                </Link>
            </li>
            <li>
            <Link className="link" to="/messages">
            <QuestionAnswerIcon className="icon"/>
                <span>VIEW MESSSAGES</span>
                </Link>
            </li>
        </ul>
        </div>
      </div>  
      <div className="right">
        <nav className="nav">
        <p>{time[0] + ':' + time[1]} | {new Date().toLocaleDateString() + ''}</p>
        <p> Welcome Back {currentUser?.firstname}</p> 
        {currentUser ? (
             <Link className="out_in" onClick={adminlogout} to="/"> Logout</Link>
          ) : (
            <Link className="button_user" to="/login"> Login </Link>
          )}
       
        </nav>
        <div>
          <h4> Admin Dashboard</h4>
          <div className="adminbutton">
            <div className="buttonright">
            <Link to="/users"> 
            <Button>VIEW ALL MEMBERS</Button>
            </Link> 
            </div>
            <div className="buttonleft">
            <Link to="/users"> 
            <Button>VIEW MESSSAGES</Button>
            </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  Admin;