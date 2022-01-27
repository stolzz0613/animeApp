import React from 'react'
import styled from 'styled-components'
import { Profile } from '..'
import { Stack } from '../../atoms'

const InfoBox = ({ children }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: 40%;
    `
    return (
        <Container>
            {children}
        </Container>
    )
}

InfoBox.Title = function InfoBoxTitle({ title, rating }){
    const Title = styled.h1`
        color: white;
        margin: 0;
    `
    const Rating = styled.div`
        color: white;
        padding: 3px 5px 3px 5px;
        width: fit-content;
        height: fit-content;
    `

    const Container = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

    `
    return (
        <Container>
            <Title>{title}</Title>
            <Rating>⭐ {rating}</Rating>
        </Container>
    )
}
InfoBox.ExtraDetails = function InfoBoxTitle({ extraDetails }){
    const Container = styled.div`
        font-weight: bold;
        display: flex;
        justify-content: space-evenly;
        gap: 20px;

        span {
            color: white;
        }
    `
    return (<Container>{extraDetails.map(detail => <span>{detail}</span> )}</Container>)
}
InfoBox.Description = function InfoBoxDescription({ description }){
    const Text = styled.p`
        color: white;
        display: -webkit-box;
        justify-contet: center;
        max-width: 100%;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
    `
    return <Text>{description}</Text>
}
InfoBox.Characters = function InfoBoxCharacters({ data }){
    return (
        <Stack>
            {
                data.map(char => <Profile
                        key={char?.data?.attributes?.name}
                        image={char?.data?.attributes?.image?.original}
                        />
                )
            }
        </Stack>
    )
}
export default InfoBox;
