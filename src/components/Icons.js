import React from 'react'
import styled from 'styled-components'

import icons from './../assets/images'

const Img = styled.img`
width: 10px;
height: 10px;
`

const Icons = ({ name }) => {
    return(
        <figure>
            <Img src={icons[name]}></Img>
        </figure>
    )
}

export default Icons;