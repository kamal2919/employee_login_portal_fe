import { Col } from "react-bootstrap";
import styled from '@emotion/styled';
import bgimg from '../images/bgimg.jpg';

export const StyledContainer = styled(Col)`
   background-color : white;
   margin : 0;
    // height : 100vh;
   width: 80%;
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   border-radius : 1rem;
    .employee-div{
        font-weight: 700;
        font-size : 20px;
        padding-left: 5rem;
        padding-top: 2rem;
        padding-bottom : 2rem;
    }
    .name-div,.field-name-div,.phone-div,.field-phone-div{
        padding-left: 5rem;
    }
    .name-div,.phone-div,.email-div,.code-div,.pass-div{
        font-weight: 600;
        padding-bottom : 6px;
        font-size: 14px;
    }
    .field-input-div{
        line-height: 2;
        border-radius: 1rem;
        border: none;
        background-color: #E1E1E1;
        padding-left:8px;
    }
    .phone-div,.code-div{
        padding-top : 1rem;
    }
    .pass-main-div{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        padding-left: 6rem;
        padding-top: 1rem;
    }
    .button-div{
        justify-content: center;
        margin-top: 2rem;
    }
    .update-btn, .delete-btn{
        margin-bottom : 3rem;
        color : white;
        border : none;
        border-radius : 1rem;
        width: 25%;
        line-height: 2;
        font-weight: 600;
    }
    .update-btn{
        margin-right: 3rem;
        background-color : green;
        
    }
    .delete-btn{
        margin-right: 3rem;
        background-color: red;
    }
    .update-text{
        // color : green;
        font-size: 13px;
        font-weight: 600;
        margin-left: 14rem;
        padding-top: 1rem;
        
    }
`;