import React from 'react'
import styled from 'styled-components'

const Card = ({ size, title, background, onClick }) => {
    const sizes = {small: '200px', medium: '300px', large: '400px'};

    const Container = styled.div`
        border-radius: 20px;
        max-width: ${sizes[size]};
        height: calc(${sizes[size]} * 1.5);

        &:hover {
            cursor: pointer;
        }

        img {
            border-radius: 20px;
            width: 100%;
            height: 100%;
        }
    `
    return (
        <Container onClick={onClick}>
            <img src={background} alt={title} />
            <span>{title}</span>
        </Container>
    )
}

export default Card;
