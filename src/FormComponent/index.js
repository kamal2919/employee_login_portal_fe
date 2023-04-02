import React,{useEffect, useState} from "react";
import {Row,Col} from "react-bootstrap";
import axios from 'axios';
import { StyledContainer,StyledLoginButton } from "./style";

export default function FormComponent (props){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(true);
    const [emailErr,setEmailErr] = useState("");
    const [passErr,setPassErr] = useState("");
    const emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    useEffect(() => {
        if(email.length === 0 || password.length == 0){
            setError(true);
        }
        else if(emailErr.length === 0 && passErr.length === 0){
            setError(false);
        }
        else{
            setError(true);
        }
        
    },[error,email,emailErr,passErr,password]);

    useEffect(() => { 
        if(email.length > 0 && !email.match(emailRegex)){
            setEmailErr("Invalid Email Id");
        }

        if(email.length > 0 && email.match(emailRegex)){
            setEmailErr("");
        }

        if(password.length>0 && password.length < 3){
            setPassErr("Password should contain atleast 3 characters");
        }

        if(passErr.length >= 3){
            setPassErr("");
        }
    },[email,password]);
    

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        try{

            const loginResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,{email,password});
            
            let {name, empEmail, phone, code, token} = loginResponse.data;
            
            localStorage.setItem('token',token);
            
            props.setToken(token);
            props.setName(name);
            props.setEmail(email);
            props.setPass(password);
            props.setPhone(phone);
            props.setCode(code);

            console.log("login successful, token pushed to local storage")

        }catch(error){
            console.log(error);
        }

    }

    return(
        <StyledContainer className="g-0 ">
            <form onSubmit={handleFormSubmit}>
                <Row className="g-0 email-label-div">
                    <label htmlFor="email"> Employee Email <span style={{color:"red"}}>*</span> </label>
                </Row>

                <Row className="g-0 email-input-div">
                    <input
                        type = "email"
                        value = {email}
                        onChange = {(event) => setEmail(event.target.value)}
                        className= "email-input"
                    />
                </Row>

                <Row className="g-0 pass-label-div">
                    <label htmlFor="password"> Employee Password <span style={{color:"red"}}>*</span> </label>
                </Row>

                <Row className="g-0 pass-input-div">
                    <input
                        type = "password"
                        value = {password}
                        onChange = {(event) => setPassword(event.target.value)}
                        className= "pass-input"
                    />
                </Row>

                <Row className='g-0 register-link-div'>
                    <a href="/register">
                        Register
                    </a>
                </Row>

                <Row className="g-0 submit-div">
                    <StyledLoginButton type="submit" style={{opacity : error == true ? '0.5' : '1'}}> Log In </StyledLoginButton>
                </Row>

            </form>
        </StyledContainer>
    );
}