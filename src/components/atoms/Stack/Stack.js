import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Stack = ({
    horizontalAlignment = 'center',
    direction = 'row',
    marginTop = '0px',
    children
}) => {
    const Container = styled.div`
        align-items: center;
        display: flex;
        flex-direction: ${direction};
        gap: 40px;
        justify-content: ${horizontalAlignment};
        margin-top: ${marginTop};
        position: relative;
        z-index: 2;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    `

    return (
        <Container>
            {children}
        </Container>
    )
}

Stack.propTypes = {
    horizontalAlignment: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end' ]),
    direction: PropTypes.oneOf([ 'row', 'column' ]),
    marginTop: PropTypes.string,
}
export default Stack;
