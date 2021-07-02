import React from 'react'
import styled from 'styled-components'

import images from '../assets/images/index'

export const Figure = styled.div`
width: 100%;
height: 100%;

    img { 
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const ImageComponent = ({name, image}) => {
    return(
        <Figure alt="image-component">
            <img src={images[image]} alt={name}></img>
        </Figure>
    )
}

export default ImageComponent