import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({
    text = '<',
    size = 'md',
    color = 'black',
    action = () => {console.log('Button clicked')},
}) => {
    const sizes = {sm: 0.5, md: 1, lg: 1.5, xl: 2};
    const ButtonStyled = styled.button`
        border-radius: 50%;
        width: calc(50px * ${sizes[size]});
        height: calc(50px * ${sizes[size]});
        color: ${color};
        font-size: calc(30px * ${sizes[size]});
        font-weight: bold;
        cursor: pointer;
    `;
    return (
        <ButtonStyled onClick={action}>
            {text}
        </ButtonStyled>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf([ 'sm', 'md', 'lg', 'xl' ]),
    color: PropTypes.string,
    action: PropTypes.func,
}

export default Button;