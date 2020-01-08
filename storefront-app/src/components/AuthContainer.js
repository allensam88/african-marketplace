import React, { useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

const AuthContainer = ({ children, ...restProps }) => {
    return(
        <Container {...restProps}>
            { children }
        </Container>
    )
};

export default AuthContainer;
