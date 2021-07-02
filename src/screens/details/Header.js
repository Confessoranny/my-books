import React from 'react'
import styled from 'styled-components'
import ImageComponent from '../../components/ImageComponent'

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
background-color: #FFF6E5;
`

const Img = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 7rem;
margin-left: 2rem;
`

const Header = () => {
    return(
            <Container alt="header-content">
                <Img alt="header-img">
                    <ImageComponent image="leftArrow"></ImageComponent>
                </Img>
            </Container>
    )
}

export default Header