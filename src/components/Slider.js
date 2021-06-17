import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'

import Image from './Image'

const Container = styled.div`
width: 100%;
font-family: sans-serif;
padding: 10px 30px;
`

const Card = styled.div`
width: 100px;
height: 100px;
background-color: #5c2e91;
background-color: #fff;
color: #fff;
color: #3498db;
text-align: center;
`

const photos = [
  {
    name: "challanger",
    url: "https://auto1-homepage.prod.mp.auto1.cloud/static/optimized/orange-car-hp-right-mercedez.png"
  },
  {
    name: "ss",
    url: "https://cdn.catawiki.net/assets/marketing/uploads-files/54537-3540681cf7426c0b82a893e00fbc92db0fa0b1f9-original.png"
  },
  {
    name: "maverik",
    url: "https://2.bp.blogspot.com/-cCU4JJE1ke8/WIEHtka5hLI/AAAAAAAAGl4/M19PkZIol1oRUWreJeWl1IVjWMInAGteQCLcB/s1600/1238686154_13399.jpg"
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
    <Container className="App">
      <Slider {...settings}>{photos.map((photo) => {
        return(
          <div>
            <Image name={photos.url}></Image>
          </div>
        )
      })}</Slider>
    </Container>
  )
}

export default SliderCard