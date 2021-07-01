import React from 'react'
import styled from 'styled-components'
import ImageComponent from './ImageComponent'

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 40px;

`

const Group = styled.div`
width: 30px;
height: 30px;
display: flex;
flex-direction: column;
align-items: center;

 p {
    font-size: 15px;
    font-weight: 400;
    color: #313131;
    background-color: #FFFFFF;
 }
`


const Menu = () => {
    return(
        <Container alt="menu-container">
            <Group alt="menu-group">
                <ImageComponent image="home"></ImageComponent>
                <p>Home</p>
            </Group>
            <Group alt="menu-group">
                <ImageComponent image="home"></ImageComponent>
                <p>Libraries</p>
            </Group>
            <Group alt="menu-group">
                <ImageComponent image="home"></ImageComponent>
                <p>Profile</p>
            </Group>
        </Container>
    )
}

export default Menu