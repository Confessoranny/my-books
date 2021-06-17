import React from 'react'
import styled from 'styled-components'

import SearchInput from '../../components/SeachInput'
import SliderCard from '../../components/Slider'

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #F2F2F2;
`

const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: red; */
`

const Group = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: calc(100% - 20%);
/* background-color: blue; */
`

const Text = styled.div`
display: flex;
justify-content: flex-start;
width: calc(100% - 20%);
/* background-color: yellow; */
`

const H1 = styled.h1`
font-size: 24px;
font-weight: 600;
font-family: "SF Pro Display";
color: #54565A;

    span {
        color: #FF6978;
    }

`

function Home() {

    return(
        <Container alt="home-container">
            <Content alt="home-content">
                <Group alt="home-Group">
                    <SearchInput />
                </Group>
                <Text alt="home-identity">
                    <H1>Hi, <span>Mehmed Al Fatih</span> 👋</H1>
                </Text>
                <Group alt="home-Group">
                    <SliderCard></SliderCard>
                </Group>
            </Content>
        </Container>
    )
}

export default Home;