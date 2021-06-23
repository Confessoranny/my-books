import React from 'react'
import styled from 'styled-components'

import ImageComponent from './ImageComponent'
import images from './../assets/images/index'

const Container = styled.div`
width: 100%;
height: 100%;
`

const Texts = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 10px;

h1 {
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #3F4043;
  }

  p {
    font-size: 14px;
    line-height: 16px;
    color: #4ABDF1;

  }
`

const H1 = styled.h1`
font-size: 18px;
line-height: 21px;
letter-spacing: 0.5px;
color: #3F4043;
`

const Card = ({value}) => {
    return(
        <Container alt="holder-content">
            <Texts>
                <H1>Currently Reading</H1>
                <p>More</p>
            </Texts>
            <ImageComponent image={value}></ImageComponent>
        </Container>
    )
}

export default Card