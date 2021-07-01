import React from "react";
import Slider from "react-slick"; 
import "./../css/slick/slick-theme.css";
import "./../css/slick/slick.css";
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
    letter-spacing: 0.5px;
    font-weight: 600;
    color: #3F4043;
    font-family: 'SFProDisplay';
    line-height: 21px;
  }

  p {
    font-size: 16px;
    font-family: 'SFProText';
    font-weight: 600;
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