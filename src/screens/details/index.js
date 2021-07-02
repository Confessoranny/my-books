import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Mask from './Mask'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Details = () => {
    return(
        <Container alt="details-container">
            <Content alt="details-content">
                <Header></Header>
                <Mask></Mask>
            </Content>
        </Container>
    )
}

export default Details;