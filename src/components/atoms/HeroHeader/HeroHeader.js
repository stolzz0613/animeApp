import React from 'react'
import styled from 'styled-components';

const HeroHeader = ({ background, children }) => {
    const Container = styled.div`
        height: 100vh;
        background-image: url(${props => props.url});
        background-size: cover;
        background-position: center;
        filter: blur(5px);
        z-index: -1;
    `
    return (
        <Container url={background}>
            {children}
        </Container>
    )
}
export default HeroHeader;


