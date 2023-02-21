import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./messages.scss"
import Ourlogo from "../assets/gibmpcsl.png"
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import ContactPageIcon from '@mui/icons-material/ContactPage';
 import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
 import { useContext } from "react";
import { AuthContext } from "../context/authContext";



const Messages = () => {

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');

  
  const {currentUser } = useContext(AuthContext);

  return (
    <div className="admin_message">
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
        </nav>
        <div>
          <h4> FEEDBACK MESSAGES FROM MEMBERS</h4>
     
        </div>
      </div>
    </div>
  )
}

export default Messages