import React from 'react'
import styled from 'styled-components'
import ImageComponent, {Figure} from '../../components/ImageComponent'

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
background-color: #FFF6E5;
/* background-color: blue; */
`

const Img = styled.div`
width: 1.5rem;
height: 6rem;
display: flex;
flex-direction: column;
justify-content: flex-end;
/* background-color: yellow; */

    ${Figure} {
        height: calc(100% - 50%);
        margin-left: 3rem;
        /* background-color: red; */
    }
`

const Header = () => {
    return(
            <Container alt="header-content">
                <Img alt="header-img">
                    <ImageComponent image="leftArrow"></ImageComponent>
                </Img>
            </Container>
    )
}

export default Header