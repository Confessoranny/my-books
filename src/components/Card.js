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
    line-height: 21px;
    font-weight: 600;
    font-family: 'SFProDisplay';
    letter-spacing: 0.5px;
    color: #3F4043;
  }

  p {
    font-size: 16px;
    font-family: 'SFProText';
    font-weight: 600;
    line-height: 16px;
    color: #4ABDF1;

  }
`

const Card = ({value, text}) => {
    return(
        <Container alt="card-container">
            <Texts alt="card-texts">
                <h1>{text}</h1>
                <p>More</p>
            </Texts>
            <ImageComponent image={value}></ImageComponent>
        </Container>
    )
}

export default Card