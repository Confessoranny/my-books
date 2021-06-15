import React from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SeachInput'
import Holder from './../../components/Holder'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F2F2F2;
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: calc(100% - 10%);
height: calc(100% - 2%);
`

const Text = styled.div`
display: flex;
justify-content: flex-start;
width: calc(100% - 10%);
height: calc(100% - 2%);
/* padding: 1rem 0; */
`

const H1 = styled.h1`
font-size: 20px;
font-weight: 400;
color: #54565A;
`

function Home() {

    return(
        <Container alt="home-container">
            <Content alt="home-content">
                <SearchInput />
            </Content>
            <Text alt="home-identity">
                <H1>Hi, Mehmed Al Fatih<span>icon</span></H1>
            </Text>
            <Content alt="home-content">
                <Holder></Holder>
            </Content>
            <Content alt="home-content">
                <Holder></Holder>
            </Content>
            <Content alt="home-content">
                <Holder></Holder>
            </Content>
        </Container>
    )
}

export default Home;