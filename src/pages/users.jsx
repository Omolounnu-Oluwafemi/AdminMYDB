import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./users.scss"
import Ourlogo from "../assets/gibmpcsl.png"
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import ContactPageIcon from '@mui/icons-material/ContactPage';
 import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
 import Axios from "axios"
 import { useEffect } from "react";
 import Table from 'react-bootstrap/Table';
 import { useContext } from "react";
 import { AuthContext } from "../context/authContext";


const Users = () => {

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');

  const {currentUser } = useContext(AuthContext);

  const [users, setUser] = useState([])
  
  useEffect(() => {
  Axios.get('/tables/users').then((response) =>{
        setUser(response.data);
})
  },[])


  return (
    <div className="admin_user">
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
        <div className="table">
          <h4> LIST OF ALL MEMBERS</h4>
          <Table striped bordered hover className="table_users">
      <thead>
        <tr>
          <th>S/N</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
          <th>GENDER</th>
          <th>DATE OF BIRTH</th>
        </tr>
      </thead>
      {users.map((val, index)=>(
      <>
      <tbody>
        <tr key={val.id}>
          <td>{index + 1}</td>
          <td>{val.firstname} {val.lastname}</td>
          <td>{val.email}</td>
          <td>{val.phone}</td>
          <td>{val.gender}</td>
          <td>{val.dob}</td>
        </tr>
      </tbody>
      </>
))}
    </Table>
        </div>
      </div>
    </div>
  )
}

export default Users