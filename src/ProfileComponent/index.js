import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import axios from "axios";
import { StyledContainer } from "./style";

export default function ProfileComponent (props){

    const {name,email,phone,pass,code,setName,setEmail,setPhone,setCode,setPass} = props;

    const handleUpdate = async (event) => {
        console.log("Called");
        event.preventDefault();

        try{
            const updateResponse = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/${code}`,{name,email,phone,pass});
            console.log(updateResponse,updateResponse.status);
            if(updateResponse.status === 200){
                alert("Profile Updated Successfully");
            }
        }catch(error){
            alert("Failed to update profile, kindly try again");
        }
    }

    const handleDelete = async (event) => {
        console.log("Called");
        event.preventDefault();

        try{
            const deleteResponse = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${code}`);
            alert(deleteResponse.data.message);
            localStorage.clear();
            window.parent.location.href = `${process.env.REACT_APP_BASE_URL}`;
        }catch(error){
            alert("Failed to delete profile, kindly try again");
        }
    }
    

    return(
        <StyledContainer className="g-0">
            <Row className="g-0 employee-div">
                Employee Profile
            </Row>

            <Row className="g-0">
                <Col className="g-0 lg-6 md-6">
                    <Row className="g-0 name-div">
                        Employee Name
                    </Row>

                    <Row className="g-0 field-name-div">
                        <input
                            type = "text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="field-input-div"
                        />
                    </Row>
                </Col>

                <Col className="g-0 lg-6 md-6">
                    <Row className="g-0 email-div">
                        Employee Email
                    </Row>

                    <Row className="g-0 field-email-div">
                        <input
                            type = "email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="field-input-div"
                        />
                    </Row>
                
                </Col>
            </Row>

            <Row className="g-0 phone-code-row">
                <Col className="g-0">
                    <Row className="g-0 phone-div">
                        Employee Phone
                    </Row>

                    <Row className="g-0 field-phone-div">
                        <input
                            type = "text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="field-input-div"
                        />
                    </Row>
                </Col>

                <Col className="g-0">
                    <Row className="g-0 code-div">
                        Employee Code
                    </Row>

                    <Row className="g-0 field-code-div">
                        <input
                            type = "text"
                            value={code}
                            disable = {true}
                            style={{backgroundColor:"#E1E1E1"}}
                            className="field-input-div"
                        />
                    </Row>
                </Col>
            </Row>

            <Row className="g-0 pass-main-div">
                <Row className="g-0 pass-div">
                    Employee Password
                </Row>

                <Row className="g-0 field-pass-div">
                    <input
                        type = "text"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className="field-input-div"
                    />
                </Row>
            </Row>

            {/* <Row className="g-0 update-text" >
                {updateMsg.length>0 ? <span style={{color : updateStatus ? 'green' : 'red'}} >{updateMsg}</span> : null}
            </Row> */}

            <Row className="g-0 button-div">
                <button type="submit" className="update-btn" onClick={handleUpdate}>
                    Update Profile
                </button>
                <button type="submit" className="delete-btn" onClick={handleDelete}>
                    Delete Profile
                </button>
            </Row>
        </StyledContainer>

    );
};