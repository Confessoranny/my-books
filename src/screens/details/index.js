import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Mask from './Mask'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 60px;
font-family: 'SF Pro Display';

    div {
        width: 90%; 
    }

    span{
        font-size: 24px;
        font-weight: 500;
    }

    h1 { 
        font-family: 'SF Pro Display';
        font-size: 24px;
        font-weight: 300;
    }

    h2 { 
        font-weight: 400;
        color: #FF6978;

    }
`

const Infos = styled.h1`
width: 100%;
background-color: pink;

    div {
        width: 90%;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 25px;
        color: #313131;
        font-family: 'SFProText';
    }
`

const Details = () => {
    return(
        <Container alt="details-container">
            <Content alt="details-content">
                <Header></Header>
                <Mask></Mask>
                <Title>
                    <div>
                        <h1><span>Hooked</span>: How to Build Habid-Forming Products</h1>
                        <h2>Nir Eyal</h2>
                    </div>
                </Title>
                <Infos>
                    <div>
                        <p>
                            How do successful companies create products people can’t put down?
                        </p>
                        <p>
                            Why do some products capture widespread attention while others flop?
                        </p>
                        <p>
                            Why do some products capture widespread attention while others flop?
                            Why do some products capture widespread attention while others flop?
                        </p>
                    </div>
                </Infos>
            </Content>
        </Container>
    )
}

export default Details;