import React from 'react'
import styled from 'styled-components'
import ImageComponent, { Figure } from '../../components/ImageComponent'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Content = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Mask = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: center;
border-bottom-right-radius: 100px;
background-color: #FFF6E5;

    ${Figure} {
        margin-top: 5rem;
        width: calc(100% - 10%);
        height: calc(100% - 10%);
    }
`

const Details = () => {
    return(
        <Container alt="details-container">
            <Content alt="details-content">
                <Mask alt="details-mask">
                    <ImageComponent image="bitmap"></ImageComponent>
                </Mask>
            </Content>
        </Container>
    )
}

export default Details;