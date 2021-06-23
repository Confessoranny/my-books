import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'

import ImageComponent from './ImageComponent'


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: sans-serif;
padding: 10px 30px;
`

const Card = styled.div`
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

const photos = [
  {
    name: "mask",
  },
  {
    name: "city",
  },
  {
    name: "cyberpunk",
  }
]

const SliderCard = () => {

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: true, 
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
}
  return(
    <Container className="container-slider">
      <Texts>
        <h1>Discover new book</h1>
        <p>More</p>
      </Texts>
      <Slider {...settings}>{photos.map((photos) => {
        return(
          <Card>
            <ImageComponent image={photos.name}></ImageComponent>
          </Card>
        )
      })}</Slider>
    </Container>
  )
}

export default SliderCard