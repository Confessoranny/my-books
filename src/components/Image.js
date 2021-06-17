import React from 'react'
import styled from 'styled-components'

const Figure = styled.div`
width: 100%;
height: 139px;
background-color: #00173D;

    img { 
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Image = ({name, image}) => {
    return(
        <Figure>
            <img src={image} alt={name}></img>
        </Figure>
    )
}

export default Image