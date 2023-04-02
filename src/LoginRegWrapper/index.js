import React,{useEffect, useState} from "react";
import {Row,Col} from "react-bootstrap";
import LoginComponent from "../LoginComponent";
import ProfileComponent from "../ProfileComponent";
import { StyledContainer } from "./style";

export default function LoginRegWrapper (props){

    const [token,setToken] = useState("");
    const[name,setName] =  useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[code,setCode] = useState("");
    const[pass,setPass] = useState("");

    return(
        <StyledContainer className="g-0">
            {token.length>0 
            ? 
                <ProfileComponent
                    name = {name} email = {email} phone={phone} pass = {pass} code = {code}
                    setName={setName} 
                    setEmail={setEmail} 
                    setPhone={setPhone} 
                    setCode={setCode} 
                    setPass={setPass}
                /> 
            : 
                <LoginComponent 
                    setToken = {setToken} 
                    setName={setName} 
                    setEmail={setEmail} 
                    setPhone={setPhone} 
                    setCode={setCode} 
                    setPass={setPass}
                />
            }
        </StyledContainer>

    );
};