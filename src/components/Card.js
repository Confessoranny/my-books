import React from 'react'
import styled from 'styled-components'

import Icons from './Icons'

const Container = styled.div`
width: 100%;
height: 100%;
/* background-color: #00173D; */
`

const H1 = styled.h1`
font-size: 18px;
color: #3F4043;
`
const Image = styled.div`
width: 100%;
height: 100%;
`

const Card = () => {
    return(
        <Container alt="holder-content">
            <H1>Discover new book</H1>
            <Image>
                <Icons></Icons>
            </Image>
        </Container>
    )
}

export default Card