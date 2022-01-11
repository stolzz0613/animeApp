import React from 'react'
import styled from 'styled-components'

const Stack = ({ horizontalAlignment, direction, marginTop, children }) => {
    const Container = styled.div`
        align-items: center;
        display: flex;
        flex-direction: ${direction};
        gap: 40px;
        justify-content: ${horizontalAlignment};
        margin-top: ${marginTop};
        position: relative;
        z-index: 2;
    `

    return (
        <Container>
            {children}
        </Container>
    )
}
export default Stack;
