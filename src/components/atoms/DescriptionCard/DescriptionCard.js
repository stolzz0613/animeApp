import React from 'react'
import styled from 'styled-components';

const DescriptionCard = ({ children }) => {
    const Container = styled.div`
        align-items: center;
        gap: 50px;
        justify-content: space-evenly;
        backdrop-filter: blur(40px);
        box-shadow: 10px 5px 20px black;
        display: flex;
        height: 70%;
        padding: 20px;
        width: 70%;
        top: 10%;
        position: relative;
    `;

    return (
        <Container>
            {children}
        </Container>
    )
}
export default DescriptionCard;