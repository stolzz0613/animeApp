import React, { useState } from 'react'
import styled from 'styled-components';
import { BallTriangle } from 'react-loader-spinner';

const HeroHeader = ({ background, children }) => {
    const [loaded, setloaded] = useState(false);

    const Container = styled.div`
        justify-content: center;
        height: 100vh;
        display: flex;

        > * {
            z-index: 2;
        }

        .spinner {
            align-items: center;
            border-radius: 20px;
            display: ${props => !props.loaded ? 'flex' : 'none'};
            justify-content: center;
            height: 100%;
            width: 100%;
        }

        .heroBackground {
            display: ${props => props.loaded ? 'block' : 'none'};
            filter: blur(15px) brightness(80%);
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: -1;
        }
    `
    return (
        <Container loaded={loaded}>
            {
                <div className='spinner'>
                    <BallTriangle type="BallTriangle" color="#00BFFF"/>
                </div>
            }
            <img className='heroBackground' src={background} alt='background' onLoad={() => setloaded(true)}/>
            {children}
        </Container>
    )
}
export default HeroHeader;


