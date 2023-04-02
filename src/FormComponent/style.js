import { Button, Row } from "react-bootstrap";
import styled from '@emotion/styled';

export const StyledContainer = styled(Row)`
    display: flex;
    justify-content : center;
    margin-top: 2rem;

    .email-label-div, .pass-label-div{
        // color : white;
        font-size: 13px;
        font-weight : 600;
    }
    .email-input-div{
        margin-top:0.6rem;
        margin-bottom:1rem;
    }
    .pass-input-div{
        margin-top:0.6rem;
    }
    .email-input,.pass-input{
        background-color: #E1E1E1;
        border: none !important;
        border-radius: 1rem;
        line-height : 2;
        padding-left:8px;
        width: 16rem;  
    }
    .register-link-div{
        margin-top:0.6rem;
        text-align : end;
        font-size: 13px;
        font-weight : 600;
    }
    .submit-div{
        margin-top:1.5rem;
        display: flex;
        justify-content : center;
        
    }
    .register-link-div{
        justify-content : end;
    }
    .error-div{
        font-size: 8px;
        color: red;
    }
`;

export const StyledLoginButton = styled(Button)`
    color : white;
    font-weight: 600;
    font-size: 16px;
    width : 16rem;
    line-height:2;
    border-radius : 1rem;
    border : none;
    background-color : green;
`;