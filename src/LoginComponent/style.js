import { Row } from "react-bootstrap";
import styled from '@emotion/styled';

export const StyledContainer = styled(Row)`
    background-color : white;
    width: 100%;
    max-width: 40vw;
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius : 1rem;
    flex-direction : column;

    .head-text{
        font-size: 26px;
        text-align : center;
        font-weight : 700;
        justify-content : center;
    }
    .form-row{
        justify-content : center;
    }
`;