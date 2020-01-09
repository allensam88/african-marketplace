import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    height: 35px;
    width: 85%;
    border-radius: 5px;
    margin: 4px;
    background-color: #fe6c61;
    font-weight: bold;
    font-size: .875rem;
`;

const Button = ({ children, ...restProps }) => {
    return(
        <StyledButton {...restProps}>
            { children }
        </StyledButton>
    )
};

export default StyledButton;