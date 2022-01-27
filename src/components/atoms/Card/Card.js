import React, { useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import defaultBack from '../../../assets/WJ.png'
import styled from 'styled-components'

const Card = ({
    size = 'small',
    background = defaultBack
}) => {
    const sizes = {small: '200px', medium: '300px', large: '400px'};
    const [loaded, setloaded] = useState(false);

    const Container = styled.div`
        border-radius: 20px;
        box-shadow: 10px 5px 10px black;
        max-width: ${sizes[size]};
        height: calc(${sizes[size]} * 1.5);

        &:hover {
            cursor: pointer;
        }

        .spinner {
            align-items: center;
            border-radius: 20px;
            display: ${props => !props.loaded ? 'flex' : 'none'};
            justify-content: center;
            height: 100%;
            width: 100%;
        }

        .background {
            border-radius: 20px;
            width: 100%;
            height: 100%;
        }
    `
    return (
        <Container loaded={loaded}>
            {
                <div className='spinner'>
                    <BallTriangle type="BallTriangle" color="#00BFFF"/>
                </div>
            }
            <img className='background' src={background} alt='card' onLoad={() => setloaded(true)}/>
        </Container>
    )
}

export default Card;
