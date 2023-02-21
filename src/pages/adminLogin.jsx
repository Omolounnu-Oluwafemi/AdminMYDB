 import { Link, useNavigate  } from "react-router-dom";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import logo from "../assets/gibmpcsl.png"
import "./adminLogin.scss"
 import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


const AdminLogin = () => {

    const [inputs, setInputs] = useState({
        email: "",  
        phone: "",
    });

      const [err, setError] = useState(null);
      const navigate = useNavigate();

      const {adminlogin} = useContext(AuthContext);
      // console.log(currentUser)

      const [validated, setValidated] = useState(false);
    
      const handleChange = e => {
       setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const formSubmit = (event) =>{

        const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();   
            event.stopPropagation();
          }
          setValidated(true);
        }


      const handleSubmit = async e => {
         e.preventDefault();    
            try {
             await  adminlogin(inputs)
               navigate("/home");
            } catch (err) {
              setError(err.response.data);
            }    
      };
      
  return (
    <div className="formbg">
       <div className="loginImage ">
         <img src="" alt="" />
         { <img src={logo} alt="gibhorizonLogo" className="logo"/> }
       </div>
    <Form className="loginform" noValidate onSubmit={handleSubmit} onClick={formSubmit} validated={validated} >
        <h3>ADMIN LOGIN</h3>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustomEmail">
          <Form.Label className="loginLabel">Email</Form.Label>
          <InputGroup className="forminput" hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              name="email"
           onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid" className="feedback">
              Please input a correct email address
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomPhonenumber">
          <Form.Label className="loginLabel">Phone Number</Form.Label>
          <InputGroup className="forminput"  hasValidation>
            <Form.Control
              type="phone"
              placeholder="Phone Number"
              required
              name="phone"
          onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid" className="feedback">
              Please add a phone number
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button className="button" type="submit" >Submit</Button>
      {err && <p className="error">{err}</p>}
    </Form>
    </div>
  )
}

export default AdminLogin
