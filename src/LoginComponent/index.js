import React,{useEffect, useState} from "react";
import {Row,Col} from "react-bootstrap";
import { StyledContainer } from "./style";
import FormComponent from "../FormComponent"

export default function LoginComponent (props){
    useEffect(() => {
        localStorage.clear();
    },[]);
    
    return(
        <StyledContainer className="g-0">

            <Row className="g-0 head-text">
                <span>Employee Login Portal</span>
            </Row>

            <Row className="g-0 form-row">
                <FormComponent {...props} />
            </Row>
        </StyledContainer>

    );
};