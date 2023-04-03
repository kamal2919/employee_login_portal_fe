import React,{useEffect, useState} from "react";
import {Row,Col,Form} from "react-bootstrap";
import axios from "axios";
import { StyledContainer } from "./style";

export default function RegisterComponent (props){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[pass,setPass] = useState("");
    const[nameErr,setNameErr] = useState("");
    const[phoneErr,setPhoneErr] = useState("");
    const[EmailErr,setEmailErr] = useState("");
    const[passErr,setPassErr] = useState("");
    const[error,setError] = useState(true);
    const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    useEffect(() => {
        if(name.length === 0 || email.length === 0 || pass.length === 0 || phone.length === 0){
            setError(true);
        }
        else if(nameErr.length === 0 
            && EmailErr.length === 0 && passErr.length === 0 && phoneErr.length === 0){
                setError(false);
        }
        else{
            setError(true);
        }
    },[name,email,phone,pass,nameErr,phoneErr,EmailErr,passErr]);

    useEffect(() => {
        if(name.length > 0 && name.length < 3){
            setNameErr("Name should contain atleast 3 characters");
        }
        if(phone.length > 1 && phone.length != 10){
            setPhoneErr("Invalid Phone Number");
        }
        if(email.length > 0 && !email.match(emailRegex)){
            setEmailErr("Invalid Email Id");
        }
        if(pass.length>0 && pass.length < 3){
            setPassErr("Password should contain atleast 3 characters");
        }
        if(name.length >= 3){
            setNameErr("");
        }
        if(phone.length === 10){
            setPhoneErr("");
        }
        if(email.length > 0 && email.match(emailRegex)){
            setEmailErr("");
        }
        if(passErr.length >= 3){
            setPassErr("");
        }
    },[name,email,phone,pass]);


    const handleRegister = async (event) => {
        event.preventDefault();

        try{
            const Regresponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`,{name,email,phone,pass});
            
            if(Regresponse.status === 200){
                alert(Regresponse.data.message);
                window.parent.location.href = `${process.env.REACT_APP_BASE_URL}`;
            }
        }catch(error){
            alert(error.response.data.message);
            if(error.response.data.message.toLowerCase() == "profile already present"){
                console.log("i am clicked",error.response.data.message.toLowerCase());
                window.parent.location.href = `${process.env.REACT_APP_BASE_URL}`;
            }
            else{
                window.parent.location.href = `${process.env.REACT_APP_BASE_URL}/register`;
                setName("");
                setEmail("");
                setPhone("");
                setPass("");
            }
        }
    }

    return(
        <StyledContainer className="g-0">
            <Row className="g-0 reg-wrap">
                <Row className="g-0 head-text">
                    Employee Registration Portal
                </Row>
                
                    
                <Row className="g-0 employee-detail-div">
                    <Form onSubmit={handleRegister}>
                        <Row className="g-0 name-label">
                            <Col className="g-0" lg={3} md={2} sm={2}>
                            </Col>
                            <Col className="g-0">
                                Employee Name <span style={{color:"red"}}>*</span>
                            </Col>
                            <Col className="g-0">
                            </Col>
                            
                        </Row>

                        <Row className="g-0 name-input">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                <input
                                    type = "text"
                                    onChange={(e) => setName(e.target.value)}
                                    className = "input-reg-div"
                                />
                            </Col>
                            
                            <Col className="g-0"></Col>
                           
                        </Row>

                        <Row className="g-0 error-div">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                {nameErr.length > 0 
                                ? 
                                    <span>{nameErr}</span>
                                : null
                                }
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 email-label">
                            
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                Employee Email <span style={{color:"red"}}>*</span>
                            </Col>

                            <Col className="g-0"></Col>
                        </Row>

                        <Row className="g-0 email-input">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                <input
                                    type = "email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className = "input-reg-div"
                                />
                            </Col>
                            
                            <Col className="g-0"></Col>
                           
                        </Row>

                        <Row className="g-0 error-div">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                {EmailErr.length > 0 
                                ? 
                                    <span>{EmailErr}</span>
                                : null
                                }
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 phone-label">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                Employee Phone No. <span style={{color:"red"}}>*</span>
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 phone-input">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                <input
                                    type = "text"
                                    onChange={(e) => setPhone(e.target.value)}
                                    className = "input-reg-div"
                                />
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 error-div">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                {phoneErr.length > 0 
                                ? 
                                    <span>{phoneErr}</span>
                                : null
                                }
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 pass-label">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                Employee Password <span style={{color:"red"}}>*</span>
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 pass-input">
                         <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                <input
                                    type = "password"
                                    onChange={(e) => setPass(e.target.value)}
                                    className = "input-reg-div"
                                />
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 error-div">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                {passErr.length > 0 
                                ? 
                                    <span>{passErr}</span>
                                : null
                                }
                            </Col>
                            
                            <Col className="g-0"></Col>
                            
                        </Row>

                        <Row className="g-0 register-btn-div">
                            <Col className="g-0" lg={3} md={2} sm={2}></Col>
                            
                            <Col className="g-0">
                                <button type="submit" className="register-btn" style={{opacity : error == true ? '0.5' : '1'}}>
                                    Create Account
                                </button>
                            </Col>
                            
                            <Col className="g-0" lg={4} md={4} sm={4}></Col>
                            
                        </Row>
                    </Form>
                </Row>
                
            </Row>
        </StyledContainer>
    );
}