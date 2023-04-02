import { Button, Row,Col } from "react-bootstrap";
import styled from '@emotion/styled';

export const StyledContainer = styled(Col)`
    margin: 0;
    height: 100vh;
    background-image : url(https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .reg-wrap{
        flex-direction : column;
        margin: 0;
        background-color: white;
        padding: 0;
        border-radius: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .employee-detail-div{
        margin: 0;
        display: flex;
        flex-direction: column;
        max-height: 20rem;
    }
    .reg-wrap{
        width: 50%;
    }
    .head-text{
        justify-content : center;
        font-weight:700;
        font-size: 20px;
        padding-top:2rem;
        padding-bottom:1rem;
    }
    .name-label,.email-label,.phone-label,.pass-label{
        justify-content: center;
        font-weight: 600;
        font-size: 13px;
        padding-bottom: 0.4rem;
    }
    .email-label,.phone-label,.pass-label{
        padding-top: 0.4rem;
    }
    .name-input,.email-input,.phone-input,.pass-input{
        // justify-content: center;
    }
    .input-reg-div{
        background-color: #E1E1E1;
        border: none !important;
        border-radius: 1rem;
        line-height : 1.5;
        padding-left:8px;
        width: 100%;
        min-width: 13rem;
        padding-bottom :1rem;
    }
    .register-btn-div{
        padding-top: 1.5rem;
    }
    .register-btn{
        color: white;
        background-color: green;
        font-weight: 600;
        border : 0 !important;
        line-height: 2;
        border-radius : 1rem;
        width: 100%;
    }
    input[type="text" i] {
        padding: 1px 1px;
        padding-left : 8px !important;
    }
    input[type="email" i] {
        padding: 1px 1px;
        padding-left : 8px !important;
    }
    input[type="password" i] {
        padding: 1px 1px;
        padding-left : 8px !important;
    }
    .error-div{
        font-size: 8px;
        color: red;
    }
`;