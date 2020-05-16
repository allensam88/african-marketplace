import React, { useState } from "react";
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 1px solid red;
`;

const Card = ({ children, ...restProps }) => {
    return(
        <StyledCard {...restProps}>
            { children }
        </StyledCard>
    )
};

export default StyledCard;