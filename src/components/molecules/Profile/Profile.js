import React from 'react'
import styled from 'styled-components'

const Profile = ({ image }) => {
    const Profile = styled.img`
        border-radius: 50%;
        height: 70px;
        width: 70px;
    `
    return (
        <Profile src={image} alt='char'/>
    )
}
export default Profile;