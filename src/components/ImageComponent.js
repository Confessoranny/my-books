import React from 'react'
import styled from 'styled-components'

import images from '../assets/images/index'

const Figure = styled.div`
width: 100%;
height: 100%;
/* background-color: #00173D; */
/* background-color: pink; */

    img { 
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const ImageComponent = ({name, image}) => {
    return(
        <Figure>
            <img src={images[image]} alt={name}></img>
        </Figure>
    )
}

export default ImageComponent